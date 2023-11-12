
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/db");

dotenv.config();
mongoose.set("strictQuery", false);
connectDb();
const app = express();
app.use(cors());
app.use(express.json());

const tasRouter = require("./routes/tasks");
app.use("/api/tasks",tasRouter)




const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));