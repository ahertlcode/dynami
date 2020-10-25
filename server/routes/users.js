const users = require("../controllers/users");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/users", users.create);
router.get("/users", users.index);
router.get("/users/:id", users.show);
router.put("/users/:id", users.update);
router.delete("/users/:id", users.remove);
router.post('/users/login', users.login);

module.exports = router;