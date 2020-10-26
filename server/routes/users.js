const users = require("../controllers/users");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/users", users.create);
router.get("/users", auth, users.index);
router.get("/users/:id", auth, users.show);
router.put("/users/:id", auth, users.update);
router.delete("/users/:id", auth, users.remove);
router.post('/users/login', users.login);

module.exports = router;