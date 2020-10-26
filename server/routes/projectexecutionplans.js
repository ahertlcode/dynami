const projectexecutionplans = require("../controllers/projectexecutionplans");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/projectexecutionplans", auth, projectexecutionplans.create);
router.get("/projectexecutionplans", auth, projectexecutionplans.index);
router.get("/projectexecutionplans/:id", auth, projectexecutionplans.show);
router.put("/projectexecutionplans/:id", auth, projectexecutionplans.update);
router.delete("/projectexecutionplans/:id", auth, projectexecutionplans.remove);

module.exports = router;