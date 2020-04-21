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
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    mailingAddress: {
      type: String,
      required: true,
      trim: true,
    },
    reasonForDonaation: {
      type: String,
      required: true,
      trim: true,
    },
    storageRequirements: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    contactName: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    productDescription: {
      type: String,
      required: true,
      trim: true,
    },
    packagingDetails: {
      type: String,
      required: true,
      trim: true,
    },
    listOfIngredients: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
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
      "companyName",
      "mailingAddress",
      "reasonForDonaation",
      "storageRequirements",
      "quantity",
      "contactName",
      "phoneNumber",
      "productDescription",
      "packagingDetails",
      "listOfIngredients",
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
    companyName,
    mailingAddress,
    reasonForDonaation,
    storageRequirements,
    quantity,
    contactName,
    phoneNumber,
    productDescription,
    packagingDetails,
    listOfIngredients,
  }) {
    const options = omitBy(
      {
        companyName,
        mailingAddress,
        reasonForDonaation,
        storageRequirements,
        quantity,
        contactName,
        phoneNumber,
        productDescription,
        packagingDetails,
        listOfIngredients,
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
