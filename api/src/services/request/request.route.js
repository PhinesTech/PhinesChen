const express = require("express");
const validator = require("express-joi-validation").createValidator({});

const controller = require("./request.controller");
const { authorize, ADMIN, LOGGED_USER } = require("../../middlewares/auth");
const {
  listRequest,
  createRequest,
  replaceRequest,
  updateRequest,
} = require("./request.validation");

const router = express.Router();

/**
 * Load request when API with requestId route parameter is hit
 */
router.param("requestId", controller.load);

router
  .route("/")
  /**
   * @api {get} v1/request List Request
   * @apiDescription Get a list of request
   * @apiVersion 1.0.0
   * @apiName ListRequest
   * @apiGroup Request
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  Request's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Request per page
   * @apiParam  {String}             [name]       Request's name
   * @apiParam  {String}             [email]      Request's email
   * @apiParam  {String=request,admin}  [role]       Request's role
   *
   * @apiSuccess {Object[]} request List of request.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated request can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(authorize(ADMIN), validator.query(listRequest.query), controller.list)
  /**
   * @api {post} v1/request Create Request
   * @apiDescription Create a new request
   * @apiVersion 1.0.0
   * @apiName CreateRequest
   * @apiGroup Request
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  Request's access token
   *
   * @apiParam  {String}             email     Request's email
   * @apiParam  {String{6..128}}     password  Request's password
   * @apiParam  {String{..128}}      [name]    Request's name
   * @apiParam  {String=request,admin}  [role]    Request's role
   *
   * @apiSuccess {String}  id            Request's id
   * @apiSuccess {String}  name          Request's name
   * @apiSuccess {String}  quantity      Request's quantity
   * @apiSuccess {String}  isPerishable  Request's isPerishable
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated request can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(validator.body(createRequest.body), controller.create);

router
  .route("/:requestId")
  /**
   * @api {get} v1/request/:id Get Request
   * @apiDescription Get request information
   * @apiVersion 1.0.0
   * @apiName GetRequest
   * @apiGroup Request
   * @apiPermission request
   *
   * @apiHeader {String} Authorization  Request's access token
   *
   * @apiSuccess {String}  id            Request's id
   * @apiSuccess {String}  name          Request's name
   * @apiSuccess {String}  quantity      Request's quantity
   * @apiSuccess {String}  isPerishable  Request's isPerishable
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated request can access the data
   * @apiError (Forbidden 403)    Forbidden    Only request with same id or admins can access the data
   * @apiError (Not Found 404)    NotFound     Request does not exist
   */
  .get(authorize(LOGGED_USER), controller.get)
  /**
   * @api {put} v1/request/:id Replace Request
   * @apiDescription Replace the whole request document with a new one
   * @apiVersion 1.0.0
   * @apiName ReplaceRequest
   * @apiGroup Request
   * @apiPermission request
   *
   * @apiHeader {String} Authorization  Request's access token
   *
   * @apiParam {String}  id            Request's id
   * @apiParam {String}  name          Request's name
   * @apiParam {String}  quantity      Request's quantity
   * @apiParam {String}  isPerishable  Request's isPerishable
   * @apiParam {Date}    createdAt  Timestamp
   * (You must be an admin to change the request's role)
   *
   * @apiSuccess {String}  id            Request's id
   * @apiSuccess {String}  name          Request's name
   * @apiSuccess {String}  quantity      Request's quantity
   * @apiSuccess {String}  isPerishable  Request's isPerishable
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated request can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only request with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Request does not exist
   */
  .put(
    authorize(ADMIN),
    validator.body(replaceRequest.body),
    validator.params(replaceRequest.params),
    controller.replace
  )
  /**
   * @api {patch} v1/request/:id Update Request
   * @apiDescription Update some fields of a request document
   * @apiVersion 1.0.0
   * @apiName UpdateRequest
   * @apiGroup Request
   * @apiPermission request
   *
   * @apiHeader {String} Authorization  Request's access token
   *
   * @apiParam {String}  id            Request's id
   * @apiParam {String}  name          Request's name
   * @apiParam {String}  quantity      Request's quantity
   * @apiParam {String}  isPerishable  Request's isPerishable
   * @apiParam {Date}    createdAt  Timestamp
   * (You must be an admin to change the request's role)
   *
   * @apiSuccess {String}  id            Request's id
   * @apiSuccess {String}  name          Request's name
   * @apiSuccess {String}  quantity      Request's quantity
   * @apiSuccess {String}  isPerishable  Request's isPerishable
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated request can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only request with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Request does not exist
   */
  .patch(
    authorize(ADMIN),
    validator.body(updateRequest.body),
    validator.params(updateRequest.params),
    controller.update
  )
  /**
   * @api {patch} v1/request/:id Delete Request
   * @apiDescription Delete a request
   * @apiVersion 1.0.0
   * @apiName DeleteRequest
   * @apiGroup Request
   * @apiPermission request
   *
   * @apiHeader {String} Authorization  Request's access token
   *
   * @apiSuccess (No Content 204)  Successfully deleted
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated request can delete the data
   * @apiError (Forbidden 403)    Forbidden     Only admins can delete the data
   * @apiError (Not Found 404)    NotFound      Request does not exist
   */
  .delete(authorize(ADMIN), controller.remove);

module.exports = router;
