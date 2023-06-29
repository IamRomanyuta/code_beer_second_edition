const Router = require("express");
const router = new Router();
const descriptionController = require("../controllers/descriptionController");

router.get("/:deviceId", descriptionController.getDescriptionByDeviceId);

module.exports = router;
