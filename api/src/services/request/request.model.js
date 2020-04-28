const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");

const APIError = require("../../utils/APIError");

/**
 * Request Schema
 * @private
 */
const requestSchema = new mongoose.Schema(
    {
        specificRequest: {
            type: String,
            trim: true,
        },
        householdSize: {
            type: Number,
            required: true,
            trim: true,
        },
        dietaryRestrictions: {
            type: String,
            trim: true,
        },
        allergies: {
            type: String,
            trim: true,
        },
        address: {
            type: Object,
            street: {
                type: String,
                trim: true,
            },
            city: {
                type: String,
                trim: true,
            },
            zip: {
                type: Number,
            },
        },
        status: {
            type: String,
            default: "Unrequested",
            enum: [
                "Unrequested",
                "Requested",
                "Approved",
                "Declined",
                "Delivered",
                "Picked Up",
            ],
        },
    },
    {
        timestamps: true,
    }
);

/**
 * Methods
 */
requestSchema.method({
    transform() {
        const transformed = {};
        const fields = [
            "id",
            "specificRequest",
            "householdSize",
            "dietaryRestrictions",
            "allergies",
            "address",
            "status",
            "createdAt",
        ];

        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        return transformed;
    },
});

/**
 * Statics
 */
requestSchema.statics = {
    /**
     * Get request
     *
     * @param {ObjectId} id - The objectId of request.
     * @returns {Promise<Request, APIError>}
     */
    async get(id) {
        try {
            let request;

            if (mongoose.Types.ObjectId.isValid(id)) {
                request = await this.findById(id).exec();
            }

            if (request) {
                return request;
            }

            throw new APIError({
                message: "Request does not exist",
                status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },

    /**
     * List request in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of request to be skipped.
     * @param {number} limit - Limit number of request to be returned.
     * @returns {Promise<Request[]>}
     */
    list({
        page = 1,
        perPage = 30,
        specificRequest,
        householdSize,
        dietaryRestrictions,
        allergies,
        status,
        address,
    }) {
        const options = omitBy(
            {
                specificRequest,
                householdSize,
                dietaryRestrictions,
                allergies,
                status,
                address,
            },
            isNil
        );

        return this.find(options)
            .sort({ createdAt: -1 })
            .skip(perPage * (page - 1))
            .limit(perPage)
            .exec();
    },
};

/**
 * @typedef User
 */
module.exports = mongoose.model("Request", requestSchema);
