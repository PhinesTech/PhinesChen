const express = require("express");
const { validate } = require("express-validation");
const bcrypt = require("bcryptjs");

const controller = require("./member.controller");
const { authorize, ADMIN, LOGGED_USER } = require("../../middlewares/auth");
const {
  listMembers,
  createMember,
  replaceMember,
  updateMember,
} = require("./member.validation");

const router = express.Router();

/**
 * Load member when API with memberId route parameter is hit
 */
router.param("memberId", controller.load);

router.get("/hash", async (req, res) => {
  const passwordHashed = await bcrypt.hash(req.query.password, 1);
  res.status(200).json({ pass: passwordHashed });
});

router
  .route("/")
  /**
   * @api {get} v1/members List Members
   * @apiDescription Get a list of members
   * @apiVersion 1.0.0
   * @apiName ListMembers
   * @apiGroup Member
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  Member's access token
   *
   * @apiParam  {Number{1-}}           [page=1]     List page
   * @apiParam  {Number{1-100}}        [perPage=1]  Members per page
   * @apiParam  {String}               [name]       Member's name
   * @apiParam  {String}               [email]      Member's email
   * @apiParam  {String=member,admin}  [role]       Member's role
   *
   * @apiSuccess {Object[]} members List of members.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated members can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(authorize(ADMIN), validate(listMembers), controller.list)
  /**
   * @api {post} v1/members Create Member
   * @apiDescription Create a new member
   * @apiVersion 1.0.0
   * @apiName CreateMember
   * @apiGroup Member
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  Member's access token
   *
   * @apiParam  {String}               email     Member's email
   * @apiParam  {String{6..128}}       password  Member's password
   * @apiParam  {String{..128}}        [name]    Member's name
   * @apiParam  {String=member,admin}  [role]    Member's role
   *
   * @apiSuccess (Created 201) {String}  id         Member's id
   * @apiSuccess (Created 201) {String}  name       Member's name
   * @apiSuccess (Created 201) {String}  email      Member's email
   * @apiSuccess (Created 201) {String}  role       Member's role
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated members can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(ADMIN), validate(createMember), controller.create);

router
  .route("/profile")
  /**
   * @api {get} v1/members/profile Member Profile
   * @apiDescription Get logged in member profile information
   * @apiVersion 1.0.0
   * @apiName MemberProfile
   * @apiGroup Member
   * @apiPermission member
   *
   * @apiHeader {String} Authorization  Member's access token
   *
   * @apiSuccess {String}  id         Member's id
   * @apiSuccess {String}  name       Member's name
   * @apiSuccess {String}  email      Member's email
   * @apiSuccess {String}  role       Member's role
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated Members can access the data
   */
  .get(authorize(), controller.loggedIn);

router
  .route("/:memberId")
  /**
   * @api {get} v1/members/:id Get Member
   * @apiDescription Get member information
   * @apiVersion 1.0.0
   * @apiName GetMember
   * @apiGroup Member
   * @apiPermission member
   *
   * @apiHeader {String} Authorization  Member's access token
   *
   * @apiSuccess {String}  id         Member's id
   * @apiSuccess {String}  name       Member's name
   * @apiSuccess {String}  email      Member's email
   * @apiSuccess {String}  role       Member's role
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated members can access the data
   * @apiError (Forbidden 403)    Forbidden    Only member with same id or admins can access the data
   * @apiError (Not Found 404)    NotFound     Member does not exist
   */
  .get(authorize(LOGGED_USER), controller.get)
  /**
   * @api {put} v1/members/:id Replace Member
   * @apiDescription Replace the whole member document with a new one
   * @apiVersion 1.0.0
   * @apiName ReplaceMember
   * @apiGroup Member
   * @apiPermission member
   *
   * @apiHeader {String} Authorization  Member's access token
   *
   * @apiParam  {String}               email     Member's email
   * @apiParam  {String{6..128}}       password  Member's password
   * @apiParam  {String{..128}}        [name]    Member's name
   * @apiParam  {String=member,admin}  [role]    Member's role
   * (You must be an admin to change the member's role)
   *
   * @apiSuccess {String}  id         Member's id
   * @apiSuccess {String}  name       Member's name
   * @apiSuccess {String}  email      Member's email
   * @apiSuccess {String}  role       Member's role
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated members can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only member with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Member does not exist
   */
  .put(authorize(LOGGED_USER), validate(replaceMember), controller.replace)
  /**
   * @api {patch} v1/members/:id Update Member
   * @apiDescription Update some fields of a member document
   * @apiVersion 1.0.0
   * @apiName UpdateMember
   * @apiGroup Member
   * @apiPermission member
   *
   * @apiHeader {String} Authorization  Member's access token
   *
   * @apiParam  {String}               email     Member's email
   * @apiParam  {String{6..128}}       password  Member's password
   * @apiParam  {String{..128}}        [name]    Member's name
   * @apiParam  {String=member,admin}  [role]    Member's role
   * (You must be an admin to change the member's role)
   *
   * @apiSuccess {String}  id         Member's id
   * @apiSuccess {String}  name       Member's name
   * @apiSuccess {String}  email      Member's email
   * @apiSuccess {String}  role       Member's role
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated members can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only member with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Member does not exist
   */
  .patch(authorize(LOGGED_USER), validate(updateMember), controller.update)
  /**
   * @api {patch} v1/members/:id Delete Member
   * @apiDescription Delete a member
   * @apiVersion 1.0.0
   * @apiName DeleteMember
   * @apiGroup Member
   * @apiPermission member
   *
   * @apiHeader {String} Authorization  Member's access token
   *
   * @apiSuccess (No Content 204)  Successfully deleted
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated members can delete the data
   * @apiError (Forbidden 403)    Forbidden     Only member with same id or admins can delete the data
   * @apiError (Not Found 404)    NotFound      Member does not exist
   */
  .delete(authorize(LOGGED_USER), controller.remove);

module.exports = router;
