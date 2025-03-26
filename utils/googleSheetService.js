const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "./service-account.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const fetchStockPrice = async (spreadsheetId, sheetName) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:B`,
    });
    return response.data.values;
  } catch (error) {
    console.log("Error Occured: ", error);
    throw new Error(error.message);
  }
};

module.exports = { fetchStockPrice };
