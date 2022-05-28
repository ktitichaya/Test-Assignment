require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const { MYSQL_PORT } = process.env;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use("/api/product", require("./api/api_product_list"));
app.use("/api/order", require("./api/api_order_list"));
app.use("/api/payment", require("./api/api_payment"));
//================================================
app.listen(MYSQL_PORT, () => {
  console.log("Backend is running...");
});
