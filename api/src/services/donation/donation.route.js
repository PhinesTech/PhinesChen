const express = require("express");
const validator = require("express-joi-validation").createValidator({});

const controller = require("./donation.controller");
const { authorize, ADMIN, LOGGED_USER } = require("../../middlewares/auth");
const {
  listDonation,
  createDonation,
  replaceDonation,
  updateDonation,
} = require("./donation.validation");

const router = express.Router();

/**
 * Load donation when API with donationId route parameter is hit
 */
router.param("donationId", controller.load);

router
  .route("/")
  /**
   * @api {get} v1/donation List Donation
   * @apiDescription Get a list of donation
   * @apiVersion 1.0.0
   * @apiName ListDonation
   * @apiGroup Donation
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  Donation's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Donation per page
   * @apiParam  {String}             [name]       Donation's name
   * @apiParam  {String}             [email]      Donation's email
   * @apiParam  {String=donation,admin}  [role]       Donation's role
   *
   * @apiSuccess {Object[]} donation List of donation.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated donation can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(authorize(ADMIN), validator.query(listDonation.query), controller.list)
  /**
   * @api {post} v1/donation Create Donation
   * @apiDescription Create a new donation
   * @apiVersion 1.0.0
   * @apiName CreateDonation
   * @apiGroup Donation
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  Donation's access token
   *
   * @apiParam  {String}             email     Donation's email
   * @apiParam  {String{6..128}}     password  Donation's password
   * @apiParam  {String{..128}}      [name]    Donation's name
   * @apiParam  {String=donation,admin}  [role]    Donation's role
   *
   * @apiSuccess {String}  id            Donation's id
   * @apiSuccess {String}  name          Donation's name
   * @apiSuccess {String}  quantity      Donation's quantity
   * @apiSuccess {String}  isPerishable  Donation's isPerishable
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated donation can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(LOGGED_USER), validator.body(createDonation.body), controller.create);

router
  .route("/:donationId")
  /**
   * @api {get} v1/donation/:id Get Donation
   * @apiDescription Get donation information
   * @apiVersion 1.0.0
   * @apiName GetDonation
   * @apiGroup Donation
   * @apiPermission donation
   *
   * @apiHeader {String} Authorization  Donation's access token
   *
   * @apiSuccess {String}  id            Donation's id
   * @apiSuccess {String}  name          Donation's name
   * @apiSuccess {String}  quantity      Donation's quantity
   * @apiSuccess {String}  isPerishable  Donation's isPerishable
   * @apiSuccess {Date}    createdAt     Timestamp
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated donation can access the data
   * @apiError (Forbidden 403)    Forbidden    Only donation with same id or admins can access the data
   * @apiError (Not Found 404)    NotFound     Donation does not exist
   */
  .get(authorize(ADMIN), controller.get)
  /**
   * @api {put} v1/donation/:id Replace Donation
   * @apiDescription Replace the whole donation document with a new one
   * @apiVersion 1.0.0
   * @apiName ReplaceDonation
   * @apiGroup Donation
   * @apiPermission donation
   *
   * @apiHeader {String} Authorization  Donation's access token
   *
   * @apiParam {String}  id            Donation's id
   * @apiParam {String}  name          Donation's name
   * @apiParam {String}  quantity      Donation's quantity
   * @apiParam {String}  isPerishable  Donation's isPerishable
   * @apiParam {Date}    createdAt     Timestamp
   * (You must be an admin to change the donation's role)
   *
   * @apiSuccess {String}  id            Donation's id
   * @apiSuccess {String}  name          Donation's name
   * @apiSuccess {String}  quantity      Donation's quantity
   * @apiSuccess {String}  isPerishable  Donation's isPerishable
   * @apiSuccess {Date}    createdAt     Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated donation can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only donation with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Donation does not exist
   */
  .put(
    authorize(ADMIN),
    validator.body(replaceDonation.body),
    validator.params(replaceDonation.params),
    controller.replace
  )
  /**
   * @api {patch} v1/donation/:id Update Donation
   * @apiDescription Update some fields of a donation document
   * @apiVersion 1.0.0
   * @apiName UpdateDonation
   * @apiGroup Donation
   * @apiPermission donation
   *
   * @apiHeader {String} Authorization  Donation's access token
   *
   * @apiParam {String}  id            Donation's id
   * @apiParam {String}  name          Donation's name
   * @apiParam {String}  quantity      Donation's quantity
   * @apiParam {String}  isPerishable  Donation's isPerishable
   * @apiParam {Date}    createdAt     Timestamp
   * (You must be an admin to change the donation's role)
   *
   * @apiSuccess {String}  id            Donation's id
   * @apiSuccess {String}  name          Donation's name
   * @apiSuccess {String}  quantity      Donation's quantity
   * @apiSuccess {String}  isPerishable  Donation's isPerishable
   * @apiSuccess {Date}    createdAt     Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated donation can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only donation with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Donation does not exist
   */
  .patch(
    authorize(ADMIN),
    validator.body(updateDonation.body),
    validator.params(updateDonation.params),
    controller.update
  )
  /**
   * @api {patch} v1/donation/:id Delete Donation
   * @apiDescription Delete a donation
   * @apiVersion 1.0.0
   * @apiName DeleteDonation
   * @apiGroup Donation
   * @apiPermission donation
   *
   * @apiHeader {String} Authorization  Donation's access token
   *
   * @apiSuccess (No Content 204)  Successfully deleted
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated donation can delete the data
   * @apiError (Forbidden 403)    Forbidden     Only admins can delete the data
   * @apiError (Not Found 404)    NotFound      Donation does not exist
   */
  .delete(authorize(ADMIN), controller.remove);

module.exports = router;
