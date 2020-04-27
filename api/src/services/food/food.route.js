const express = require("express");
const validator = require("express-joi-validation").createValidator({});

const controller = require("./food.controller");
const { authorize, ADMIN, LOGGED_USER } = require("../../middlewares/auth");
const {
  listFood,
  createFood,
  replaceFood,
  updateFood,
} = require("./food.validation");

const router = express.Router();

/**
 * Load food when API with foodId route parameter is hit
 */
router.param("foodId", controller.load);

router
  .route("/")
  /**
   * @api {get} v1/food List Food
   * @apiDescription Get a list of food
   * @apiVersion 1.0.0
   * @apiName ListFood
   * @apiGroup Food
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  Food's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [perPage=1]  Food per page
   * @apiParam  {String}             [name]       Food's name
   * @apiParam  {String}             [email]      Food's email
   * @apiParam  {String=food,admin}  [role]       Food's role
   *
   * @apiSuccess {Object[]} food List of food.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated food can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(authorize(ADMIN), validator.query(listFood.query), controller.list)
  /**
   * @api {post} v1/food Create Food
   * @apiDescription Create a new food
   * @apiVersion 1.0.0
   * @apiName CreateFood
   * @apiGroup Food
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization  Food's access token
   *
   * @apiParam  {String}             email     Food's email
   * @apiParam  {String{6..128}}     password  Food's password
   * @apiParam  {String{..128}}      [name]    Food's name
   * @apiParam  {String=food,admin}  [role]    Food's role
   *
   * @apiSuccess {String}  id            Food's id
   * @apiSuccess {String}  name          Food's name
   * @apiSuccess {String}  quantity      Food's quantity
   * @apiSuccess {String}  isPerishable  Food's isPerishable
   * @apiSuccess (Created 201) {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated food can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(authorize(ADMIN), validator.body(createFood.body), controller.create);

router
  .route("/:foodId")
  /**
   * @api {get} v1/food/:id Get Food
   * @apiDescription Get food information
   * @apiVersion 1.0.0
   * @apiName GetFood
   * @apiGroup Food
   * @apiPermission food
   *
   * @apiHeader {String} Authorization  Food's access token
   *
   * @apiSuccess {String}  id            Food's id
   * @apiSuccess {String}  name          Food's name
   * @apiSuccess {String}  quantity      Food's quantity
   * @apiSuccess {String}  isPerishable  Food's isPerishable
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Unauthorized 401) Unauthorized Only authenticated food can access the data
   * @apiError (Forbidden 403)    Forbidden    Only food with same id or admins can access the data
   * @apiError (Not Found 404)    NotFound     Food does not exist
   */
  .get(authorize(ADMIN), controller.get)
  /**
   * @api {put} v1/food/:id Replace Food
   * @apiDescription Replace the whole food document with a new one
   * @apiVersion 1.0.0
   * @apiName ReplaceFood
   * @apiGroup Food
   * @apiPermission food
   *
   * @apiHeader {String} Authorization  Food's access token
   *
   * @apiParam {String}  id            Food's id
   * @apiParam {String}  name          Food's name
   * @apiParam {String}  quantity      Food's quantity
   * @apiParam {String}  isPerishable  Food's isPerishable
   * @apiParam {Date}    createdAt  Timestamp
   * (You must be an admin to change the food's role)
   *
   * @apiSuccess {String}  id            Food's id
   * @apiSuccess {String}  name          Food's name
   * @apiSuccess {String}  quantity      Food's quantity
   * @apiSuccess {String}  isPerishable  Food's isPerishable
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated food can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only food with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Food does not exist
   */
  .put(
    authorize(ADMIN),
    validator.body(replaceFood.body),
    validator.params(replaceFood.params),
    controller.replace
  )
  /**
   * @api {patch} v1/food/:id Update Food
   * @apiDescription Update some fields of a food document
   * @apiVersion 1.0.0
   * @apiName UpdateFood
   * @apiGroup Food
   * @apiPermission food
   *
   * @apiHeader {String} Authorization  Food's access token
   *
   * @apiParam {String}  id            Food's id
   * @apiParam {String}  name          Food's name
   * @apiParam {String}  quantity      Food's quantity
   * @apiParam {String}  isPerishable  Food's isPerishable
   * @apiParam {Date}    createdAt  Timestamp
   * (You must be an admin to change the food's role)
   *
   * @apiSuccess {String}  id            Food's id
   * @apiSuccess {String}  name          Food's name
   * @apiSuccess {String}  quantity      Food's quantity
   * @apiSuccess {String}  isPerishable  Food's isPerishable
   * @apiSuccess {Date}    createdAt  Timestamp
   *
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated food can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only food with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     Food does not exist
   */
  .patch(
    authorize(ADMIN),
    validator.body(updateFood.body),
    validator.params(updateFood.params),
    controller.update
  )
  /**
   * @api {patch} v1/food/:id Delete Food
   * @apiDescription Delete a food
   * @apiVersion 1.0.0
   * @apiName DeleteFood
   * @apiGroup Food
   * @apiPermission food
   *
   * @apiHeader {String} Authorization  Food's access token
   *
   * @apiSuccess (No Content 204)  Successfully deleted
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated food can delete the data
   * @apiError (Forbidden 403)    Forbidden     Only admins can delete the data
   * @apiError (Not Found 404)    NotFound      Food does not exist
   */
  .delete(authorize(ADMIN), controller.remove);

module.exports = router;
