const express = require("express");
const router = express.Router();

//Dẫn đến controller
const auth = require("../controllers/auth.controller");


router.post("/register", auth.registerAccount);
router.post("/login", auth.loginAccount);

module.exports = router;
