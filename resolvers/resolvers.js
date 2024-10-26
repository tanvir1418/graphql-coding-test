import jwt from "jsonwebtoken";

// db
import db from "../db/_db.js";

export const resolvers = {
  Query: {
    nodes() {
      return db.node;
    },
    node(_, { nodeId }) {
      return db.node.find((n) => n._id === nodeId);
    },
    nodeByCompositeId(_, { compositeId }) {
      return db.node.find((n) => n.compositeId === compositeId);
    },
    actions() {
      return db.action;
    },
    action(_, { actionId }) {
      return db.action.find((ac) => ac._id === actionId);
    },
    triggers() {
      return db.trigger;
    },
    trigger(_, { triggerId }) {
      return db.trigger.find((trg) => trg._id === triggerId);
    },
    responses() {
      return db.response;
    },
    response(_, { responseId }) {
      return db.response.find((res) => res._id === responseId);
    },
    resourceTemplates() {
      return db.resourceTemplate;
    },
    resourceTemplate(_, { resourceTemplateId }) {
      return db.resourceTemplate.find(
        (rscTmpl) => rscTmpl._id === resourceTemplateId
      );
    },
  },
  NodeObject: {
    parents: (parent) => {
      if (parent.parents === null || parent.parents.length === 0) {
        return;
      }
      return parent.parents.map((parentId) =>
        db.node.find((n) => n.compositeId === parentId)
      );
    },
    trigger: (parent) => {
      if (parent.trigger) {
        return db.trigger.find((trg) => trg._id === parent.trigger);
      }
    },
    responses: (parent) => {
      if (parent.responses === null || parent.responses.length === 0) {
        return;
      }
      return parent.responses.map((response) =>
        db.response.find((res) => res._id === response)
      );
    },
    actions: (parent) => {
      if (parent.actions) {
        return parent.actions.map((action) =>
          db.action.find((ac) => ac._id === action)
        );
      }
    },
  },
  Trigger: {
    resourceTemplate: (parent) => {
      if (parent.resourceTemplateId) {
        return db.resourceTemplate.find(
          (rscTmpl) => rscTmpl._id === parent.resourceTemplateId
        );
      }
    },
  },
  Action: {
    resourceTemplate: (parent) => {
      if (parent.resourceTemplateId) {
        return db.resourceTemplate.find(
          (rscTmpl) => rscTmpl._id === parent.resourceTemplateId
        );
      }
    },
  },
  Response: {
    platforms: (parent) => {
      const response = db.response.find((res) => res._id === parent._id);
      return response.platforms;
    },
  },
  ResponsePlatform: {
    localeGroups: (parent) => {
      return parent.localeGroups;
    },
  },
  ResponseLocaleGroup: {
    variations: (parent) => {
      return parent.variations;
    },
  },
  Mutation: {
    createToken: (_, { name }) => {
      const token = jwt.sign(
        {
          userId: "6712080ce4d87020f871eeec",
          userName: name || "Demo User",
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.TOKEN_EXPIRY_TIME }
      );
      return {
        token: token,
      };
    },
  },
};
