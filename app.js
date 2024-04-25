const express = require("express");

const cors = require("cors");

const authRoute = require("./app/routes/auth.route");
const productRoute = require("./app/routes/product.route");
const authorRoute = require("./app/routes/author.route");
const userRoute = require("./app/routes/user.route");
const booktypeRoute = require("./app/routes/booktype.route");
const categoryRoute = require("./app/routes/category.route");

const ApiError = require("./app/api-error");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Welcome to Hubo Books." });
});

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/author", authorRoute);
app.use("/api/user", userRoute);
app.use("/api/booktype", booktypeRoute);
app.use("/api/category", categoryRoute);

// handle 404 response
app.use((req, res, next) => {
	return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use() and routes calls
app.use((error, req, res, next) => {
	return res.status(error.statusCode || 500).json({
		message: error.message || "Internal Server Error",
	});
});

module.exports = app;
