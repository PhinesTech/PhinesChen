const httpStatus = require("http-status");
const mongoose = require("mongoose");

const service = require("./request.service");
const User = require("../user/user.model");
const { handler: errorHandler } = require("../../middlewares/error");

/**
 * Load request and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
    try {
        const request = await service.get(id);
        req.locals = { request };
        return next();
    } catch (error) {
        return errorHandler(error, req, res);
    }
};

/**
 * Get request
 * @public
 */
exports.get = (req, res) => res.json(req.locals.request.transform());

/**
 * Get logged in request info
 * @public
 */
exports.loggedIn = (req, res) => res.json(req.request.transform());

/**
 * Create new request
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
 * Replace existing request
 * @public
 */
exports.replace = async (req, res, next) => {
    try {
        const { request } = req.locals;
        const response = await service.replace(request, req.body);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
};

/**
 * Update existing request
 * @public
 */
exports.update = async (req, res, next) => {
    try {
        const { request } = req.locals;
        const response = await service.update(request, req.body);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
};

/**
 * Get request list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
        const requestResponse = await service.list(req.query);

        const userIdMap = await requestResponse.map(({ user_id }) =>
            mongoose.Types.ObjectId(user_id)
        );

        const userResponse = await User.find({
            _id: { $in: userIdMap },
        }).exec();

        const userMap = userResponse.reduce((accumulator, current) => {
            accumulator[current._id] = current;
            return accumulator;
        }, {});

        const payload = requestResponse.map((element) => {
            return {
                ...element,
                name: userMap[element.user_id].name,
            };
        });

        res.json(payload);
    } catch (error) {
        next(error);
    }
};

/**
 * Delete request
 * @public
 */
exports.remove = async (req, res, next) => {
    try {
        const { request } = req.locals;
        await service.remove(request);
        res.status(httpStatus.NO_CONTENT).end();
    } catch (error) {
        next(error);
    }
};
