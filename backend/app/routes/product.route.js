const express = require("express");

const API_product = require("../controllers/product.controller");

const router = express.Router();

router
	.route("/")
	.get(API_product.getAllProduct)
	.post(API_product.createProduct);


router
	.route("/:id")
	.get(API_product.getwithID)
	.put(API_product.updateProduct)
	.delete(API_product.deleteProduct);

router.get("/find/:id", API_product.findoneProduct);
router.get("/editBook/:id", API_product.getproductwithID);
router.get("/limit", API_product.getProductLimit);
router.get("/findProduct/:nameproduct", API_product.findproductwithName);
router.get("/categoryBook/:name", API_product.getcategoryProduct);

module.exports = router;