const { DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceInfoController {
  async getDeviceInfoByDeviceId(req, res, next) {
    try {
      const { deviceId } = req.params;
      const deviceInfoList = await DeviceInfo.findAll({
        where: {
          deviceId: parseInt(deviceId), // Преобразуем deviceId в целое число
        },
      });

      const deviceInfoArray = deviceInfoList.map((info) => ({
        title: info.title,
        description: info.description,
      }));

      res.json(deviceInfoArray);
    } catch (error) {
      console.log(error);
      next(
        ApiError.internalServerError(
          "Ошибка при получении информации об устройстве"
        )
      );
    }
  }
}

module.exports = new DeviceInfoController();
