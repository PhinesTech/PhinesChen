const { omit } = require("lodash");

const Donation = require("./donation.model");

/**
 * Get donation
 * @public
 */
exports.get = async (id) => Donation.get(id);

/**
 * Create new donation
 * @public
 */
exports.create = async (donationData) => {
  try {
    const donation = new Donation(donationData);
    const savedDonation = await donation.save();
    return savedDonation.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Replace existing donation
 * @public
 */
exports.replace = async (donation, newDonationData) => {
  try {
    const newDonation = new Donation(newDonationData);
    const newDonationObject = omit(newDonation.toObject(), "_id");

    await donation.update(newDonationObject, { override: true, upsert: true });
    const savedDonation = await Donation.findById(donation._id);

    return savedDonation.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Update existing donation
 * @public
 */
exports.update = async (donation, updatedData) => {
  try {
    const savedDonation = await donation.save();
    return savedDonation.transform();
  } catch (error) {
    throw error;
  }
};

/**
 * Get donation list
 * @public
 */
exports.list = async (params) => {
  try {
    const donations = await Donation.list(params);
    const transformedDonations = donations.map((donation) => donation.transform());
    return transformedDonations;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete donation
 * @public
 */
exports.remove = async (donation) => donation.remove();
