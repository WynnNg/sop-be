"use strict";

const { model, Schema } = require("mongoose");

const DOCUMENT_NAME = "Menu";
const COLLECTION_NAME = "Menus";

var MenuSchema = new Schema(
  {
    id: {
      type: Number,
    },
    code: {
      type: String,
      trim: true,
    },
    label: {
      type: String,
      trim: true,
    },
    icon: {
      type: String,
      trim: true,
      default: null,
    },
    path: {
      type: String,
      trim: true,
      default: null,
    },
    parent_id: {
      type: Number,
      default: 0,
    },
    sort: {
      type: Number,
      default: 0,
    },
    is_deleted: {
      type: Number,
      default: 0,
    },
    created_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    updated_user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  },
);

module.exports = model(DOCUMENT_NAME, MenuSchema);
