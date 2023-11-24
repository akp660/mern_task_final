
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/db");
const path = require("path");

dotenv.config();
mongoose.set("strictQuery", false);
connectDb();
const app = express();
app.use(cors());
app.use(express.json());

const tasRouter = require("./routes/tasks");
app.use("/api/tasks",tasRouter)


const __dirname1 = path.resolve();
  if(process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname1, "/frontend/task-manager-app/build")));
      
      app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "frontend", "task-manager-app","build", "index.html"));
});
} else {
  app.get("/", (req, res) => {
    res.send("API is Running Successfully");
  });
  }



const PORT = process.env.PORT || 3002;
app.listen(PORT, console.log(`Server started on port ${PORT}`));