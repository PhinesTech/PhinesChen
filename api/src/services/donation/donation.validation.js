const Joi = require("@hapi/joi");

module.exports = {
  // GET /v1/donation
  listDonation: {
    query: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
  },

  // POST /v1/donation
  createDonation: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
  },

  // PUT /v1/donation/:donationId
  replaceDonation: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
    params: Joi.object({
      donationId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },

  // PATCH /v1/donation/:donationId
  updateDonation: {
    body: Joi.object({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      isPerishable: Joi.boolean()
    }),
    params: Joi.object({
      donationId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
