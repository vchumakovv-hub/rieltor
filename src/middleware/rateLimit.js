const rateLimit = require("telegraf-ratelimit");

const limitConfig = {
  window: 1000, // 1 секунда
  limit: 1,
  onLimitExceeded: (ctx) =>
    ctx.reply("Пожалуйста, подождите перед следующей командой"),
};

module.exports = rateLimit(limitConfig);
