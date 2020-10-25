const user_types = require("../controllers/user_types");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/user_types", user_types.create);
router.get("/user_types", user_types.index);
router.get("/user_types/:id", user_types.show);
router.put("/user_types/:id", user_types.update);
router.delete("/user_types/:id", user_types.remove);

module.exports = router;
