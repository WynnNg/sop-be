"use strict";

const { model, Schema, Types } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "AnnualBudget";
const COLLECTION_NAME = "AnnualBudgets";

// Declare the Schema of the Mongo model
var AnnualBudgetSchema = new Schema(
  {
    totalBudget: {
      type: Number,
      required: true,
      default: 0,
    },
    note: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    month: {
      type: Number, // 12
      required: true,
      min: 1,
      max: 12,
    },
    year: {
      type: String,
      required: true,
    },
    // ---- Metadata ----
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      immutable: true, // không cho phép thay đổi sau khi tạo
    },
    updatedBy: {
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

//Export the model
module.exports = model(DOCUMENT_NAME, AnnualBudgetSchema);
