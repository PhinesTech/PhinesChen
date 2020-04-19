const httpStatus = require("http-status");

const service = require("./food.service");
const { handler: errorHandler } = require("../../middlewares/error");

/**
 * Load food and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const food = await service.get(id);
    req.locals = { food };
    return next();
  } catch (error) {
    return errorHandler(error, req, res);
  }
};

/**
 * Get food
 * @public
 */
exports.get = (req, res) => res.json(req.locals.food.transform());

/**
 * Get logged in food info
 * @public
 */
exports.loggedIn = (req, res) => res.json(req.food.transform());

/**
 * Create new food
 * @public
 */
exports.create = async (req, res, next) => {
  try {
    const response = await service.create(req.body);
    return res.status(httpStatus.CREATED).json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * Replace existing food
 * @public
 */
exports.replace = async (req, res, next) => {
  try {
    const { food } = req.locals;
    const response = await service.replace(food, req.body);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * Update existing food
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    const { food } = req.locals;
    const response = await service.update(food, req.body);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * Get food list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const response = await service.list(req.query);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete food
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    const { food } = req.locals;
    await service.remove(food);
    res.status(httpStatus.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};
