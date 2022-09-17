const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/errorHandler");

const productsRouter = require("./routes/products");

dotenv.config();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productsRouter);

app.use("/", (req, res) => {
  res.send("Welcome to Go sports.");
});

app.use(errorHandler);

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Can'to databse"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
