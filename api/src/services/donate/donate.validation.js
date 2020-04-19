const Joi = require("@hapi/joi");

module.exports = {
  // GET /v1/food
  listFood: {
    query: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
  },

  // POST /v1/food
  createFood: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
  },

  // PUT /v1/food/:foodId
  replaceFood: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
    params: Joi.object({
      foodId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // PATCH /v1/food/:foodId
  updateFood: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
    params: Joi.object({
      foodId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
