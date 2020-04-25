const httpStatus = require("http-status");

const service = require("./donation.service");
const { handler: errorHandler } = require("../../middlewares/error");

/**
 * Load donation and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    const donation = await service.get(id);
    req.locals = { donation };
    return next();
  } catch (error) {
    return errorHandler(error, req, res);
  }
};

/**
 * Get donation
 * @public
 */
exports.get = (req, res) => res.json(req.locals.donation.transform());

/**
 * Create new donation
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
 * Replace existing donation
 * @public
 */
exports.replace = async (req, res, next) => {
  try {
    const { donation } = req.locals;
    const response = await service.replace(donation, req.body);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * Update existing donation
 * @public
 */
exports.update = async (req, res, next) => {
  try {
    const { donation } = req.locals;
    const response = await service.update(donation, req.body);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

/**
 * Get donation list
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
 * Delete donation
 * @public
 */
exports.remove = async (req, res, next) => {
  try {
    const { donation } = req.locals;
    await service.remove(donation);
    res.status(httpStatus.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};
