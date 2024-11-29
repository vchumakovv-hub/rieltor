const mainKeyboard = require("../keyboards/mainKeyboard");

module.exports = (bot) => {
  bot.command("start", (ctx) => {
    ctx.reply("Добро пожаловать! Выберите действие:", mainKeyboard);
  });
};
