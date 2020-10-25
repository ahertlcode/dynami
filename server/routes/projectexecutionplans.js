const projectexecutionplans = require("../controllers/projectexecutionplans");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/projectexecutionplans", projectexecutionplans.create);
router.get("/projectexecutionplans", projectexecutionplans.index);
router.get("/projectexecutionplans/:id", projectexecutionplans.show);
router.put("/projectexecutionplans/:id", projectexecutionplans.update);
router.delete("/projectexecutionplans/:id", projectexecutionplans.remove);

module.exports = router;