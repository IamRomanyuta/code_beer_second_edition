const Router = require("express");
const router = new Router();
const devicController = require("../controllers/deviceController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), devicController.create);
router.get("/", devicController.getAll);
router.get("/:id", devicController.getOne);
router.delete("/", devicController.deleteOne);

module.exports = router;
