const mongoose = require("mongoose");
const httpStatus = require("http-status");
const { omitBy, isNil } = require("lodash");

const APIError = require("../../utils/APIError");

/**
 * Food Schema
 * @private
 */
const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    isPerishable: {
      type: Boolean,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
foodSchema.pre("save", async function save(next) {
  try {
    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Methods
 */
foodSchema.method({
  transform() {
    const transformed = {};
    const fields = [
      "id",
      "name",
      "quantity",
      "isPerishable",
      "createdAt",
    ];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  }
});

/**
 * Statics
 */
foodSchema.statics = {
  /**
   * Get food
   *
   * @param {ObjectId} id - The objectId of food.
   * @returns {Promise<Food, APIError>}
   */
  async get(id) {
    try {
      let food;

      if (mongoose.Types.ObjectId.isValid(id)) {
        food = await this.findById(id).exec();
      }

      if (food) {
        return food;
      }

      throw new APIError({
        message: "Food does not exist",
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * List food in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of food to be skipped.
   * @param {number} limit - Limit number of food to be returned.
   * @returns {Promise<Food[]>}
   */
  list({ page = 1, perPage = 30, name, quantity, isPerishable }) {
    const options = omitBy({ name, quantity, isPerishable }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },

};

/**
 * @typedef Food
 */
module.exports = mongoose.model("Food", foodSchema);
