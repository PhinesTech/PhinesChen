const Joi = require("@hapi/joi");

module.exports = {
    // GET /v1/request
    listRequest: {
        query: Joi.object({
            specificRequest: Joi.string(),
            householdSize: Joi.number(),
            dietaryRestrictions: Joi.string(),
            allergies: Joi.string(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            status: Joi.string(),
        }),
    },

    // POST /v1/request
    createRequest: {
        body: Joi.object({
            specificRequest: Joi.string(),
            householdSize: Joi.number(),
            dietaryRestrictions: Joi.string(),
            allergies: Joi.string(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            status: Joi.string(),
        }),
    },

    // PUT /v1/request/:requestId
    replaceRequest: {
        body: Joi.object({
            specificRequest: Joi.string(),
            householdSize: Joi.number(),
            dietaryRestrictions: Joi.string(),
            allergies: Joi.string(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            status: Joi.string(),
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
            specificRequest: Joi.string(),
            householdSize: Joi.number(),
            dietaryRestrictions: Joi.string(),
            allergies: Joi.string(),
            address: Joi.object({
                street: Joi.string(),
                city: Joi.string(),
                zip: Joi.number(),
            }),
            status: Joi.string(),
        }),
        params: Joi.object({
            requestId: Joi.string()
                .regex(/^[a-fA-F0-9]{24}$/)
                .required(),
        }),
    },
};
