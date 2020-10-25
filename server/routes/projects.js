const projects = require("../controllers/projects");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/projects", projects.create);
router.get("/projects", projects.index);
router.get("/projects/:id", projects.show);
router.put("/projects/:id", projects.update);
router.delete("/projects/:id", projects.remove);

module.exports = router;