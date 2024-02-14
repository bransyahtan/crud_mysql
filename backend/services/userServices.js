import User from "../models/userModels.js";

export default class UserServices {
  static async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new error("failed to get this user", error);
    }
  }

  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new error("failed to get all user", error);
    }
  }

  static async getUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email: email } });
      return user;
    } catch (error) {
      throw new Error("Failed to get user by email: " + error.message);
    }
  }

  static async createUser(userData) {
    try {
      const existingUser = await UserServices.getUserByEmail(userData.email);
      if (existingUser) {
        throw new Error("Email already exists");
      }
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error("Failed to create user: " + error.message);
    }
  }

  static async updateUser(id, userData) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      await User.update(userData, { where: { id } });
    } catch (error) {
      throw new Error("Failed to update user: " + error.message);
    }
  }

  static async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      await User.destroy({ where: { id } });
    } catch (error) {
      throw new Error("Failed to delete user: " + error.message);
    }
  }
}
