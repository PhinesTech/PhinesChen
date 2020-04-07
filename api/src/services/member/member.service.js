const { omit } = require("lodash");

const Member = require("./member.model");
const { handler: errorHandler } = require("../../middlewares/error");

/**
 * Load member and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
  try {
    console.log(12);
    const member = await Member.get(id);
    req.locals = { member };
    return next();
  } catch (error) {
    return errorHandler(error, req, res);
  }
};

/**
 * Get member
 * @public
 */
exports.get = async (id) => Member.get(id);

/**
 * Get logged in member info
 * @public
 */
exports.loggedIn = (req, res) => res.json(req.member.transform());

/**
 * Create new member
 * @public
 */
exports.create = async (memberData) => {
  try {
    const member = new Member(memberData);
    const savedMember = await member.save();
    return savedMember.transform();
  } catch (error) {
    throw Member.checkDuplicateEmail(error);
  }
};

/**
 * Replace existing member
 * @public
 */
exports.replace = async (member, newMemberData) => {
  try {
    const newMember = new Member(newMemberData);
    const ommitRole = member.role !== "admin" ? "role" : "";
    const newMemberObject = omit(newMember.toObject(), "_id", ommitRole);

    await member.update(newMemberObject, { override: true, upsert: true });
    const savedMember = await Member.findById(member._id);

    return savedMember.transform();
  } catch (error) {
    throw Member.checkDuplicateEmail(error);
  }
};

/**
 * Update existing member
 * @public
 */
exports.update = async (member, updatedData) => {
  try {
    const ommitRole = member.role !== "admin" ? "role" : "";
    const memberTobeUpdated = omit(updatedData, ommitRole);
    const updatedMember = Object.assign(member, memberTobeUpdated);
    const savedMember = await updatedMember.save();
    return savedMember.transform();
  } catch (error) {
    throw Member.checkDuplicateEmail(error);
  }
};

/**
 * Get member list
 * @public
 */
exports.list = async (params) => {
  try {
    const members = await Member.list(params);
    const transformedMembers = members.map((member) => member.transform());
    return transformedMembers;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete member
 * @public
 */
exports.remove = async (member) => member.remove();
