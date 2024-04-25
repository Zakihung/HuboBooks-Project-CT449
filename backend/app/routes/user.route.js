const express = require("express");
const router = express.Router();
const API_user = require("../controllers/user.controller");



router
	.route("/")
	.get(API_user.getAllUser)
	.post(API_user.createUser);

router
	.route("/:id")
	.put(API_user.updateUser)
	.delete(API_user.deleteUser);

router.get("/infoUser/:id", API_user.getUserWithID);
router.get("/finduser/:nameuser", API_user.finduserwithName);
router.put("/changepassword/:id", API_user.getUserWithIDChangepass);

module.exports = router;