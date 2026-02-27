"use strict";

const { model, Schema, Types } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "Budget";
const COLLECTION_NAME = "Budgets";

// Declare the Schema of the Mongo model
var budgetSchema = new Schema(
  {
    budget_total: {
      type: Number,
      required: true,
      default: 0,
    },
    budget_quater: {
      type: String,
      required: true,
    },
    budget_year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  },
);

//Export the model
module.exports = model(DOCUMENT_NAME, budgetSchema);
