const { Markup } = require("telegraf");

const mainKeyboard = Markup.keyboard([
  ["Новий запит", "Підтримка"],
  ["Історія", "Співпраця"],
  ["Як це працює?", "Підписка"],
])
  .resize()
  .oneTime();

module.exports = mainKeyboard;
