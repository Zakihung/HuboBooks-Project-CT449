const express = require("express");
const router = express.Router();
const API_booktype = require("../controllers/booktype.controller");



router
	.route("/")
	.get(API_booktype.getAllBookType)
	.post(API_booktype.createBookType);

router
	.route("/:id")
	.put(API_booktype.updateBookType)
	.delete(API_booktype.deleteBookType);

router.get("/editbooktype/:id", API_booktype.getbooktypewithID);

router.get("/findbooktype/:namebooktype", API_booktype.findbooktypewithName);


module.exports = router;