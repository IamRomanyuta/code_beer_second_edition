const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo, DescriptionInfo } = require("../models/models");
const ApiError = require("../error/ApiError");
const db = require("../db");
const { where } = require("sequelize");

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, brandId, typeId, info, description } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        const parsedInfo = JSON.parse(info);
        const deviceInfoPromises = parsedInfo.map((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
        await Promise.all(deviceInfoPromises);
      }

      if (description) {
        DescriptionInfo.create({
          description,
          deviceId: device.id,
        });
      }

      return res.json({ device });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, deviceLimit, page } = req.query;
    deviceLimit = deviceLimit || 9;
    page = page || 1;
    let offset = page * deviceLimit - deviceLimit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit: deviceLimit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit: deviceLimit,
        offset,
      });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit: deviceLimit,
        offset,
      });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId, typeId },
        limit: deviceLimit,
        offset,
      });
    }
    return res.json({ devices });
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
    });
    return res.json(device);
  }

  async deleteOne(req, res) {
    const id = req.body;
    const deleting = await Device.destroy({ where: id });
    return res.json({ deleting });
  }
}

module.exports = new DeviceController();
