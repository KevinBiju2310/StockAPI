const express = require("express");
const router = express.Router();
const { getStockPrice } = require("../controllers/stockController");

router.get("/stock-price", getStockPrice);

module.exports = router;
