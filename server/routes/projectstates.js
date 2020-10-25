const projectstates = require("../controllers/projectstates");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/projectstates", projectstates.create);
router.get("/projectstates", projectstates.index);
router.get("/projectstates/:id", projectstates.show);
router.put("/projectstates/:id", projectstates.update);
router.delete("/projectstates/:id", projectstates.remove);

module.exports = router;