const express = require("express");
const router = express.Router();
const API_category = require("../controllers/categories.controller");

//Router
//Create Product
router.post("/",API_category.createCategory);

//Update Product
router.put("/:id",API_category.updateCategory);

//Delete Product
router.delete("/:id",API_category.deleteCategory);

//Get All Category
router.get("/",API_category.getAllCategory);

//Get Category with ID
router.get("/editCategory/:id", API_category.getcategorytwithID);

//Find Category with name of category
router.get("/findCategory/:namecategory", API_category.findcategorywithName);

module.exports = router;
