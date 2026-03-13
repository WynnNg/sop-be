"use strict";

const express = require("express");
const annualBudgetController = require("../../controllers/annualBudget.controller");
const { asyncHandler } = require("../../helpers/asyncHandler");
const router = express.Router();

router.post("", asyncHandler(annualBudgetController.createAnnualBudget));
router.get("", asyncHandler(annualBudgetController.getAllAnnualBudgets));

module.exports = router;
