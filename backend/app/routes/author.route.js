const express = require("express");

const API_author = require("../controllers/author.controller");

const router = express.Router();

router
	.route("/")
	.get(API_author.getAllAuthor)
	.post(API_author.createAuthor);

router
	.route("/:id")
	.put(API_author.updateAuthor)
	.delete(API_author.deleteAuthor);

router.get("/editauthor/:id", API_author.getauthortwithID);

router.get("/findauthor/:nameauthor", API_author.findauthorwithName);

module.exports = router;