const projects = require("../controllers/projects");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/projects", auth, projects.create);
router.get("/projects", auth, projects.index);
router.get("/projects/:id", auth, projects.show);
router.put("/projects/:id", auth, projects.update);
router.delete("/projects/:id", auth, projects.remove);

module.exports = router;