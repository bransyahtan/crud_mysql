import userServices from "../services/userServices.js";

export default class userControllers {
  static async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await userServices.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async getAllUsers(req, res) {
    try {
      const users = await userServices.getAllUsers();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async createUser(req, res) {
    const userData = req.body;
    try {
      const user = await userServices.createUser(userData);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateUser(req, res) {
    const userId = req.params.id;
    const userData = req.body;
    try {
      await userServices.updateUser(userId, userData);
      return res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      await userServices.deleteUser(userId);
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
