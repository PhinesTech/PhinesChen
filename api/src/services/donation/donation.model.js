const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");

const APIError = require("../../utils/APIError");

/**
 * Donation Schema
 * @private
 */
const donationSchema = new mongoose.Schema(
    {
        company_name: {
            type: String,
            trim: true,
        },
        mailing_address: {
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
        reason_for_donation: {
            type: String,
            trim: true,
        },
        storage_requirements: {
            type: String,
            trim: true,
        },
        quantity: {
            type: Number,
            required: true,
            trim: true,
        },
        contact_name: {
            type: String,
            trim: true,
        },
        phone_number: {
            type: String,
            trim: true,
        },
        product_name: {
            type: String,
            required: true,
            trim: true,
        },
        product_description: {
            type: String,
            required: true,
            trim: true,
        },
        packaging_details: {
            type: String,
            required: true,
            trim: true,
        },
        list_of_ingredients: {
            type: [String],
            trim: true,
        },
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at",
        timestamps: true,
    }
);

/**
 * Methods
 */
donationSchema.method({
    transform() {
        const transformed = {};
        const fields = [
            "id",
            "company_name",
            "mailing_address",
            "reason_for_donation",
            "storage_requirements",
            "quantity",
            "contact_name",
            "phone_number",
            "product_name",
            "product_description",
            "packaging_details",
            "list_of_ingredients",
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
donationSchema.statics = {
    /**
     * Get donation
     *
     * @param {ObjectId} id - The objectId of donation.
     * @returns {Promise<Food, APIError>}
     */
    async get(id) {
        try {
            let donation;

            if (mongoose.Types.ObjectId.isValid(id)) {
                donation = await this.findById(id).exec();
            }

            if (donation) {
                return donation;
            }

            throw new APIError({
                message: "Donation does not exist",
                status: httpStatus.NOT_FOUND,
            });
        } catch (error) {
            throw error;
        }
    },

    /**
     * List donations in descending order of 'createdAt' timestamp.
     *
     * @param {number} skip - Number of Donations to be skipped.
     * @param {number} limit - Limit number of donations to be returned.
     * @returns {Promise<Donations[]>}
     */
    list({
        page = 1,
        perPage = 30,
        company_name,
        mailing_address,
        reason_for_donation,
        storage_requirements,
        quantity,
        contact_name,
        phone_number,
        product_name,
        product_description,
        packaging_details,
        list_of_ingredients,
    }) {
        const options = omitBy(
            {
                company_name,
                mailing_address,
                reason_for_donation,
                storage_requirements,
                quantity,
                contact_name,
                phone_number,
                product_name,
                product_description,
                packaging_details,
                list_of_ingredients,
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
 * @typedef Donation
 */
module.exports = mongoose.model("Donation", donationSchema);
