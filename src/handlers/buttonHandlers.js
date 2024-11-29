module.exports = (bot) => {
  bot.hears("Кнопка 1", (ctx) => ctx.reply('Вы нажали "Кнопка 1"'));
  bot.hears("Кнопка 2", (ctx) => ctx.reply('Вы нажали "Кнопка 2"'));
  bot.hears("Кнопка 3", (ctx) => ctx.reply('Вы нажали "Кнопка 3"'));
  bot.hears("Кнопка 4", (ctx) => ctx.reply('Вы нажали "Кнопка 4"'));
  bot.hears("Кнопка 5", (ctx) => ctx.reply('Вы нажали "Кнопка 5"'));
  bot.hears("Кнопка 6", (ctx) => ctx.reply('Вы нажали "Кнопка 6"'));
};
