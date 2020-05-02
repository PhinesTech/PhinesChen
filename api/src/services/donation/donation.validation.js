const Joi = require("@hapi/joi");

module.exports = {
    // GET /v1/donation
    listDonation: {
        query: Joi.object({
            company_name: Joi.string(),
            mailing_address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            reason_for_donation: Joi.string(),
            storage_requirements: Joi.string(),
            product_quantity: Joi.number(),
            contact_name: Joi.string(),
            phone_number: Joi.string(),
            product_name: Joi.string(),
            product_description: Joi.string(),
            packaging_details: Joi.string(),
            list_of_ingredients: Joi.string(),
        }),
    },

    // POST /v1/donation
    createDonation: {
        body: Joi.object({
            company_name: Joi.string(),
            mailing_address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            reason_for_donation: Joi.string(),
            storage_requirements: Joi.string(),
            product_quantity: Joi.number(),
            contact_name: Joi.string(),
            phone_number: Joi.string(),
            product_name: Joi.string(),
            product_description: Joi.string(),
            packaging_details: Joi.string(),
            list_of_ingredients: Joi.string(),
        }),
    },

    // PUT /v1/donation/:donationId
    replaceDonation: {
        body: Joi.object({
            company_name: Joi.string(),
            mailing_address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            reason_for_donation: Joi.string(),
            storage_requirements: Joi.string(),
            product_quantity: Joi.number(),
            contact_name: Joi.string(),
            phone_number: Joi.string(),
            product_name: Joi.string(),
            product_description: Joi.string(),
            packaging_details: Joi.string(),
            list_of_ingredients: Joi.string(),
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
            company_name: Joi.string(),
            mailing_address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            reason_for_donation: Joi.string(),
            storage_requirements: Joi.string(),
            product_quantity: Joi.number(),
            contact_name: Joi.string(),
            phone_number: Joi.string(),
            product_name: Joi.string(),
            product_description: Joi.string(),
            packaging_details: Joi.string(),
            list_of_ingredients: Joi.string(),
        }),
        params: Joi.object({
            donationId: Joi.string()
                .regex(/^[a-fA-F0-9]{24}$/)
                .required(),
        }),
    },
};
