const config = {
	app: {
		port: process.env.PORT || 3000,
	},
	db: {
		uri: process.env.MONGODB_URI || "mongodb://localhost:27017/HuboBooks",
	},
	jwt: {
		secret: process.env.JWT_SECRET || "json_secret",
	},
	pass: {
		secret: process.env.PASS_SECRET || "password_secret",
	}
};

module.exports = config;
