const { DescriptionInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DescriptionController {
  async getDescriptionByDeviceId(req, res, next) {
    try {
      const { deviceId } = req.params;
      const description = await DescriptionInfo.findOne({
        where: { deviceId },
      });

      if (!description) {
        return next(ApiError.notFound("Описание не найдено"));
      }

      res.json(description);
    } catch (error) {
      next(ApiError.internalServerError("Ошибка при получении описания"));
    }
  }
}

module.exports = new DescriptionController();
