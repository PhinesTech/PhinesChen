const Joi = require("@hapi/joi");

module.exports = {
  // GET /v1/food
  listFood: {
    query: Joi.object({
      product_name: Joi.string(),
      product_amount: Joi.number(),
      product_group: Joi.string(),
      distribution_to: Joi.string(),
      distribution_from: Joi.string(),
      expiration_date: Joi.date(),
      pack_date: Joi.date(),
      sell_by_date: Joi.date(),
      use_by_date: Joi.date(),
    }),
  },

  // POST /v1/food
  createFood: {
    body: Joi.object({
      product_name: Joi.string(),
      product_amount: Joi.number(),
      product_group: Joi.string(),
      distribution_to: Joi.string(),
      distribution_from: Joi.string(),
      expiration_date: Joi.date(),
      pack_date: Joi.date(),
      sell_by_date: Joi.date(),
      use_by_date: Joi.date(),
    }),
  },

  // PUT /v1/food/:foodId
  replaceFood: {
    body: Joi.object({
      product_name: Joi.string(),
      product_amount: Joi.number(),
      product_group: Joi.string(),
      distribution_to: Joi.string(),
      distribution_from: Joi.string(),
      expiration_date: Joi.date(),
      pack_date: Joi.date(),
      sell_by_date: Joi.date(),
      use_by_date: Joi.date(),
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
      product_name: Joi.string(),
      product_amount: Joi.number(),
      product_group: Joi.string(),
      distribution_to: Joi.string(),
      distribution_from: Joi.string(),
      expiration_date: Joi.date(),
      pack_date: Joi.date(),
      sell_by_date: Joi.date(),
      use_by_date: Joi.date(),
    }),
    params: Joi.object({
      foodId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
