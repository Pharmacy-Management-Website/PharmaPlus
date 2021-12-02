const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV !== "PRODUCTION") {
	require("dotenv").config({ path: "backend/config/config.env" });
}

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const medicineRouter = require('./routers/medicineRouter.js');

app.use('/medapi', medicineRouter);

module.exports = app;
