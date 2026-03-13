"use strict";
const annualBudgetModel = require("../models/annualBudget.model");
const {
  BadRequestError,
  NotFoundError,
} = require("../response/error.response");

class AnnualBudgetService {
  static async getAllAnnualBudget() {
    return await annualBudgetModel.find();
  }

  static async createAnnualBudget({ month, year, totalBudget, note, userId }) {
    const newAnnualBudget = await annualBudgetModel.create({
      month,
      year,
      totalBudget,
      note,
      createdBy: userId,
    });

    return newAnnualBudget;
  }
}

module.exports = AnnualBudgetService;
