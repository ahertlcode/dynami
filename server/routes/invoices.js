const invoices = require("../controllers/invoices");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/invoices", invoices.create);
router.get("/invoices", invoices.index);
router.get("/invoices/:id", invoices.show);
router.put("/invoices/:id", invoices.update);
router.delete("/invoices/:id", invoices.remove);

module.exports = router;