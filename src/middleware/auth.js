// Список разрешенных пользователей (можно хранить в базе данных)
const allowedUsers = new Set([
  123456789, // ID пользователей Telegram
  987654321,
  582797261,
]);

// Список администраторов
const adminUsers = new Set([
  582797261, // ID администратора
]);

const auth = {
  // Проверка, авторизован ли пользователь
  isAuthorized: (ctx, next) => {
    const userId = ctx.from?.id;

    if (!userId) {
      return ctx.reply("Ошибка идентификации пользователя");
    }

    if (!allowedUsers.has(userId)) {
      return ctx.reply(
        "У вас нет доступа к этому боту. Обратитесь к администратору."
      );
    }

    return next();
  },

  // Проверка, является ли пользователь администратором
  isAdmin: (ctx, next) => {
    const userId = ctx.from?.id;

    if (!userId || !adminUsers.has(userId)) {
      return ctx.reply("У вас нет прав администратора");
    }

    return next();
  },

  // Регистрация нового пользователя
  registerUser: (userId) => {
    allowedUsers.add(userId);
  },

  // Удаление пользователя
  removeUser: (userId) => {
    allowedUsers.delete(userId);
  },

  // Добавление администратора
  addAdmin: (userId) => {
    adminUsers.add(userId);
  },

  // Проверка существования пользователя
  userExists: (userId) => {
    return allowedUsers.has(userId);
  },
};

module.exports = auth;
