const db = require("../config/database");

class UserService {
  async isAuthorized(userId) {
    const user = await db.query("SELECT * FROM users WHERE id = ?", [userId]);
    return user.length > 0;
  }

  async isAdmin(userId) {
    const user = await db.query("SELECT is_admin FROM users WHERE id = ?", [
      userId,
    ]);
    return user.length > 0 && user[0].is_admin;
  }
}

module.exports = new UserService();
