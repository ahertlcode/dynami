const invoices = require("../controllers/invoices");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/invoices", auth, invoices.create);
router.get("/invoices", auth, invoices.index);
router.get("/invoices/:id", auth, invoices.show);
router.put("/invoices/:id", auth, invoices.update);
router.delete("/invoices/:id", auth, invoices.remove);

module.exports = router;