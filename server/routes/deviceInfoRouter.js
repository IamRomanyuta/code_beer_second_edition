const express = require("express");
const router = express.Router();
const deviceInfoController = require("../controllers/deviceInfoController");

router.get("/:deviceId", deviceInfoController.getDeviceInfoByDeviceId);

module.exports = router;
