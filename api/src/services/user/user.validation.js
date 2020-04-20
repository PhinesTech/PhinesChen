const Joi = require("@hapi/joi");

const User = require("./user.model");

module.exports = {
  // GET /v1/users
  listUsers: {
    query: Joi.object({
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      name: Joi.string(),
      companyName: Joi.string(),
      email: Joi.string(),
      donatedFood: Joi.array().items(Joi.string(), Joi.number()),
      requestedFood: Joi.array().items(Joi.string(), Joi.number()),
      role: Joi.string().valid(...User.roles),
    }),
  },

  // POST /v1/users
  createUser: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      name: Joi.string().max(128),
      companyName: Joi.string(),
      role: Joi.string().valid(...User.roles),
    }),
  },

  // PUT /v1/users/:userId
  replaceUser: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      name: Joi.string().max(128),
      companyName: Joi.string(),
      donatedFood: Joi.array().items(Joi.string(), Joi.number()),
      requestedFood: Joi.array().items(Joi.string(), Joi.number()),
      role: Joi.string().valid(...User.roles),
    }),
    params: Joi.object({
      userId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // PATCH /v1/users/:userId
  updateUser: {
    body: Joi.object({
      email: Joi.string().email(),
      password: Joi.string().min(6).max(128),
      name: Joi.string().max(128),
      companyName: Joi.string(),
      donatedFood: Joi.array().items(Joi.string(), Joi.number()),
      requestedFood: Joi.array().items(Joi.string(), Joi.number()),
      role: Joi.string().valid(...User.roles),
    }),
    params: Joi.object({
      userId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
