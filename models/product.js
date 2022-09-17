const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({});

module.exports = mongoose.model("Products", ProductsSchema);
