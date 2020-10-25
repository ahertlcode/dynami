const donations = require("../controllers/donations");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/donations", auth, donations.create);
router.get("/donations", auth, donations.index);
router.get("/donations/:id", auth, donations.show);
router.put("/donations/:id", auth, donations.update);
router.delete("/donations/:id", auth, donations.remove);

module.exports = router;