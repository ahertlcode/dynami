const projectstates = require("../controllers/projectstates");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/projectstates", auth, projectstates.create);
router.get("/projectstates", auth, projectstates.index);
router.get("/projectstates/:id", auth, projectstates.show);
router.put("/projectstates/:id", auth, projectstates.update);
router.delete("/projectstates/:id", auth, projectstates.remove);

module.exports = router;