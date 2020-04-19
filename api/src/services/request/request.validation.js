const Joi = require("@hapi/joi");

module.exports = {
  // GET /v1/request
  listRequest: {
    query: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
  },

  // POST /v1/request
  createRequest: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
  },

  // PUT /v1/request/:requestId
  replaceRequest: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
    params: Joi.object({
      requestId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // PATCH /v1/request/:requestId
  updateRequest: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
    params: Joi.object({
      requestId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
