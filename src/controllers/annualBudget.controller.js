"use strict";
const { CREATED, SuccessResponse } = require("../response/success.response");
const AnnualBudgetService = require("../services/annualBudget.service");

class CommentController {
  createAnnualBudget = async (req, res, next) => {
    new SuccessResponse({
      message: "create a new annual budget successfully!",
      result: await AnnualBudgetService.createAnnualBudget(req.body),
    }).send(res);
  };

  getAllAnnualBudgets = async (req, res, next) => {
    new SuccessResponse({
      message: "get all annual budgets successfully!",
      result: await AnnualBudgetService.getAllAnnualBudget(req.body),
    }).send(res);
  };
}

module.exports = new CommentController();
