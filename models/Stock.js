const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  date: { type: String, required: true },
  closingPrice: { type: Number, required: true },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
