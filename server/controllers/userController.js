const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User, Basket } = require("../models/models");

class UserController {
  async registration(req, res) {
    const {email, password, role} = req.body;
   }

  async login(req, res) {
    const
  }

  async check(req, res) {
    const
  }
}

module.exports = new UserController();
