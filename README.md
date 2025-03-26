# Stock Price API Service

This project is a **RESTful API** built using the **Node.js, Express.js & MongoDB** that retrieves historical stock closing prices for 30 major stocks from **FY 2024-25 (April 1, 2024 to March 31, 2025)** using data from a Google Sheet.

## 🛠️ **Tech Stack**
- **MongoDB** - Database for storing stock data
- **Express.js** - Backend framework
- **Node.js** - Server-side runtime
- **Google Sheets** - Data source using Google Finance function

---

## 📌 **Features**
- Fetch historical closing prices of 30 stocks
- Error handling for invalid symbols, missing data, and out-of-range dates
- Simple and clean API with proper status codes and error messages
---

## ⚙️ **API Endpoint**

### `GET /api/stock-price?symbol={symbol}&date={date}`

**Parameters:**
- `symbol` (string) - Stock symbol
- `date` (string) - Date in YYYY-MM-DD format

**Response:**
- Success: 
  ```json
  {
    "symbol": "TATASTEEL",
    "date": "2024-04-01",
    "closingPrice": 200.5
  }
  
- Error (Invalid Symbol):  
  ```json
   {
    "error": "Invalid symbol. Symbol not found."
   }

- Error (dates out of range):  
  ```json
   {
    "message": "Invalid date. Please provide a date between 1 April 2024 and 31 March 2025"
   }

- Error (missing data):  
  ```json
  {
    "error": "Stock data not found"
  }

## 📊 **Supported Stock Symbols**

### **Indian Stocks (NSE/BSE)**  
- **TATASTEEL** - Tata Steel  
- **RELIANCE** - Reliance Industries  
- **INFY** - Infosys  
- **HDFCBANK** - HDFC Bank  
- **ICICIBANK** - ICICI Bank  
- **TCS** - Tata Consultancy Services  
- **LT** - Larsen & Toubro  
- **BHARTIARTL** - Bharti Airtel  
- **HINDUNILVR** - Hindustan Unilever  
- **BAJFINANCE** - Bajaj Finance  
- **MARUTI** - Maruti Suzuki  
- **ITC** - ITC Ltd  
- **AXISBANK** - Axis Bank  
- **SBIN** - State Bank of India  
- **ADANIENT** - Adani Enterprises  
- **COALINDIA** - Coal India Ltd  
- **ONGC** - Oil & Natural Gas Corporation  
- **POWERGRID** - Power Grid Corporation of India  
- **JSWSTEEL** - JSW Steel  
- **NTPC** - NTPC Ltd  

### **Global Stocks (NASDAQ/NYSE)**  
- **AAPL** - Apple Inc.  
- **TSLA** - Tesla Inc.  
- **GOOGL** - Alphabet Inc. (Google)  
- **AMZN** - Amazon.com Inc.  
- **MSFT** - Microsoft Corporation  
- **BRK.B** - Berkshire Hathaway Inc.  
- **JPM** - JPMorgan Chase & Co.  
- **NFLX** - Netflix Inc.  
- **NVDA** - NVIDIA Corporation  
- **META** - Meta Platforms Inc. (Facebook)  
