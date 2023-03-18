import express from "express";
const app = express();
require('dotenv');
const mongoose = require('mongoose');
const PORT = 3030;
mongoose.connect(process.env.DATABASE_CONNECTION_LINK);
const authRoutes = require("./routes/auth")
const transactionRoutes = require("./routes/transaction")

app.use(express.json())
app.use("/api", authRoutes);
app.use("/api/transaction/", transactionRoutes);

app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`)
})