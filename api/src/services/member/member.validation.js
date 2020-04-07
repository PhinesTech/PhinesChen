const Joi = require("@hapi/joi");

const Member = require("./member.model");

module.exports = {
  // GET /v1/members
  listMembers: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      name: Joi.string(),
      email: Joi.string(),
      role: Joi.string().valid(Member.roles),
    },
  },

  // POST /v1/members
  createMember: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      name: Joi.string().max(128),
      role: Joi.string().valid(Member.roles),
    },
  },

  // PUT /v1/members/:memberId
  replaceMember: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      name: Joi.string().max(128),
      role: Joi.string().valid(Member.roles),
    },
    params: {
      memberId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },

  // PATCH /v1/members/:memberId
  updateMember: {
    body: {
      email: Joi.string().email(),
      password: Joi.string().min(6).max(128),
      name: Joi.string().max(128),
      role: Joi.string().valid(Member.roles),
    },
    params: {
      memberId: Joi.string()
        .regex(/^[a-fA-F0-9]{24}$/)
        .required(),
    },
  },
};
