const express = require("express");

const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoutes = require("./routes/product.route.js");
const app = express();
//needs middeware to read the json
app.use(express.json());

//routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node API server");
});

mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => {
    console.log("connected to the database!!!");
    app.listen(3000, () => {
      console.log("server is running on port 3000 ");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
