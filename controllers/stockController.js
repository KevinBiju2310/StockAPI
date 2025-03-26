const stock = require("../models/Stock");

const validSymbols = process.env.GOOGLE_SHEET_NAMES.split(",");

const getStockPrice = async (req, res) => {
  const { symbol, date } = req.query;
  const upperSymbol = symbol.toUpperCase();
  if (!symbol || !date) {
    return res.status(400).json({ message: "Symbol and date are required" });
  }
  if (!validSymbols.includes(upperSymbol)) {
    return res.status(404).json({ error: "Invalid symbol. Symbol not found." });
  }
  const inputDate = new Date(date);
  const startDate = new Date("2024-04-01");
  const endDate = new Date("2025-03-31");

  if (
    isNaN(inputDate.getTime()) ||
    inputDate < startDate ||
    inputDate > endDate
  ) {
    return res.status(400).json({
      message:
        "Invalid date. Please provide a date between 1 April 2024 and 31 March 2025",
    });
  }
  try {
    const response = await stock.findOne({ symbol: upperSymbol, date });
    if (!response) {
      return res.status(404).json({ error: "Stock data not found" });
    }
    res.json({
      symbol: response.symbol,
      date: response.date,
      closingPrice: response.closingPrice,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { getStockPrice };
