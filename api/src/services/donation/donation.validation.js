const Joi = require("@hapi/joi");

module.exports = {
  // GET /v1/donation
  listDonation: {
    query: Joi.object({
      companyName: Joi.string(),
      mailingAddress: Joi.string(),
      reasonForDonaation: Joi.string(),
      storageRequirements: Joi.string(),
      quantity: Joi.number(),
      contactName: Joi.string(),
      phoneNumber: Joi.string(),
      productDescription: Joi.string(),
      packagingDetails: Joi.string(),
      listOfIngredients: Joi.string(),
    }),
  },

  // POST /v1/donation
  createDonation: {
    body: Joi.object({
      companyName: Joi.string(),
      mailingAddress: Joi.string(),
      reasonForDonaation: Joi.string(),
      storageRequirements: Joi.string(),
      quantity: Joi.number(),
      contactName: Joi.string(),
      phoneNumber: Joi.string(),
      productDescription: Joi.string(),
      packagingDetails: Joi.string(),
      listOfIngredients: Joi.string(),
    }),
  },

  // PUT /v1/donation/:donationId
  replaceDonation: {
    body: Joi.object({
      companyName: Joi.string(),
      mailingAddress: Joi.string(),
      reasonForDonaation: Joi.string(),
      storageRequirements: Joi.string(),
      quantity: Joi.number(),
      contactName: Joi.string(),
      phoneNumber: Joi.string(),
      productDescription: Joi.string(),
      packagingDetails: Joi.string(),
      listOfIngredients: Joi.string(),
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
      companyName: Joi.string(),
      mailingAddress: Joi.string(),
      reasonForDonaation: Joi.string(),
      storageRequirements: Joi.string(),
      quantity: Joi.number(),
      contactName: Joi.string(),
      phoneNumber: Joi.string(),
      productDescription: Joi.string(),
      packagingDetails: Joi.string(),
      listOfIngredients: Joi.string(),
    }),
    params: Joi.object({
      donationId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    }),
  },
};
