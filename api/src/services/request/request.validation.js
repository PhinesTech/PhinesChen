const Joi = require("@hapi/joi");

module.exports = {
    // GET /v1/request
    listRequest: {
        query: Joi.object({
            specific_request: Joi.string(),
            household_size: Joi.number(),
            dietary_restrictions: Joi.string(),
            allergies: Joi.string(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            status: Joi.string(),
            user_id: Joi.string(),
        }),
    },

    // POST /v1/request
    createRequest: {
        body: Joi.object({
            specific_request: Joi.string(),
            household_size: Joi.number(),
            dietary_restrictions: Joi.string(),
            allergies: Joi.string(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            status: Joi.string(),
            user_id: Joi.string(),
        }),
    },

    // PUT /v1/request/:requestId
    replaceRequest: {
        body: Joi.object({
            specific_request: Joi.string(),
            household_size: Joi.number(),
            dietary_restrictions: Joi.string(),
            allergies: Joi.string(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            status: Joi.string(),
            user_id: Joi.string(),
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
            specific_request: Joi.string(),
            household_size: Joi.number(),
            dietary_restrictions: Joi.string(),
            allergies: Joi.string(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            status: Joi.string(),
            user_id: Joi.string(),
        }),
        params: Joi.object({
            requestId: Joi.string()
                .regex(/^[a-fA-F0-9]{24}$/)
                .required(),
        }),
    },
};
