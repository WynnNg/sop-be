const { StatusCodes, ReasonPhrases } = require("../utils/httpStatusCode");

class SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.OK,
    reasonStatusCode = ReasonPhrases.OK,
    result = {},
  }) {
    this.message = !message ? reasonStatusCode : message;
    this.status = statusCode;
    this.result = result;
  }
  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

class OK extends SuccessResponse {
  constructor({ message, result }) {
    super({ message, result });
  }
}

class CREATED extends SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.CREATED,
    reasonStatusCode = ReasonPhrases.CREATED,
    result,
  }) {
    super({ message, statusCode, reasonStatusCode, result });
  }
}

module.exports = {
  OK,
  CREATED,
  SuccessResponse,
};
