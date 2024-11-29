const { Telegraf } = require("telegraf");
const config = require("./src/config/config");
const startCommand = require("./src/commands/start");
const buttonHandlers = require("./src/handlers/buttonHandlers");
const auth = require("./src/middleware/auth");

const bot = new Telegraf(config.BOT_TOKEN);

// Применение middleware для всех сообщений
bot.use(auth.isAuthorized);

// Регистрация команд
startCommand(bot);

// Регистрация обработчиков
buttonHandlers(bot);
// Команды, доступные только администраторам
bot.command("admin", auth.isAdmin, (ctx) => {
  ctx.reply("Добро пожаловать в панель администратора!");
});

// Пример команды регистрации нового пользователя (только для админов)
bot.command("register", auth.isAdmin, (ctx) => {
  const args = ctx.message.text.split(" ");
  const userId = parseInt(args[1]);

  if (!userId) {
    return ctx.reply("Укажите ID пользователя");
  }

  if (auth.userExists(userId)) {
    return ctx.reply("Пользователь уже зарегистрирован");
  }

  auth.registerUser(userId);
  ctx.reply(`Пользователь ${userId} успешно зарегистрирован`);
});

// Пример команды удаления пользователя (только для админов)
bot.command("remove", auth.isAdmin, (ctx) => {
  const args = ctx.message.text.split(" ");
  const userId = parseInt(args[1]);

  if (!userId) {
    return ctx.reply("Укажите ID пользователя");
  }

  if (!auth.userExists(userId)) {
    return ctx.reply("Пользователь не найден");
  }

  auth.removeUser(userId);
  ctx.reply(`Пользователь ${userId} удален`);
});

// Обычные команды (доступны всем авторизованным пользователям)
// bot.command("start", (ctx) => {
//   ctx.reply("Добро пожаловать!");
// });

bot.launch();