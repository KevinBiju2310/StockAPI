const dotenv = require('dotenv');
const express = require("express");
const connectDB = require("./config/db");
const stockRoutes = require("./routes/stockRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api", stockRoutes);

app.use((err, req, res, next) => {
  console.error("Error handling middleware:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running`)
})