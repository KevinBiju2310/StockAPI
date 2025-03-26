const stock = require("../models/Stock");
const { fetchStockPrice } = require("../utils/googleSheetService");

const importStockData = async () => {
  try {
    const sheetsList = process.env.GOOGLE_SHEET_NAMES.split(",");
    await stock.deleteMany({});
    for (const sheetName of sheetsList) {
      const data = await fetchStockPrice(process.env.SPREADSHEET_ID, sheetName);
      if (!data || data.length < 2) {
        console.error(`No data found in sheet: ${sheetName}`);
        continue;
      }
      //   const header = data[0];
      const rows = data.slice(2);
      const bulkData = rows.map((row) => ({
        symbol: sheetName,
        date: row[0],
        closingPrice: parseFloat(row[1]),
      }));

      await stock.insertMany(bulkData);
      console.log(`Stock data imported successfully from ${sheetName}`);
    }
  } catch (error) {
    console.error(`Error occured: `, error);
  }
};

module.exports = { importStockData };
