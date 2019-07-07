"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Expertise",
    embedded: false
  },
  {
    name: "Research",
    embedded: false
  },
  {
    name: "Social",
    embedded: true
  },
  {
    name: "Address",
    embedded: true
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "AccessRole",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "EducationStatus",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466/graphql/dev`
});
exports.prisma = new exports.Prisma();
