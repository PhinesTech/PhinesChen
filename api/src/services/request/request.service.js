const { omit } = require("lodash");

const Request = require("./request.model");

/**
 * Get request
 * @public
 */
exports.get = async (id) => Request.get(id);

/**
 * Get logged in request info
 * @public
 */
exports.loggedIn = (req, res) => res.json(req.request.transform());

/**
 * Create new request
 * @public
 */
exports.create = async (requestData) => {
  try {
    const request = new Request(requestData);
    const savedRequest = await request.save();
    return savedRequest.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Replace existing request
 * @public
 */
exports.replace = async (request, newRequestData) => {
  try {
    const newRequest = new Request(newRequestData);
    const newRequestObject = omit(newRequest.toObject(), "_id");

    await request.update(newRequestObject, { override: true, upsert: true });
    const savedRequest = await Request.findById(request._id);

    return savedRequest.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Update existing request
 * @public
 */
exports.update = async (request, updatedData) => {
  try {
    const savedRequest = await updatedRequest.save();
    return savedRequest.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Get request list
 * @public
 */
exports.list = async (params) => {
  try {
    const requests = await Request.list(params);
    const transformedRequests = requests.map((request) => request.transform());
    return transformedRequests;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete request
 * @public
 */
exports.remove = async (request) => request.remove();
