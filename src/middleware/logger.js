// src/middleware/logger.js
const logger = require("../utils/logger");

const authLogger = async (ctx, next) => {
  const userId = ctx.from?.id;
  const command = ctx.message?.text;

  logger.info(`Попытка доступа: User=${userId}, Command=${command}`);

  await next();
};

module.exports = authLogger;
