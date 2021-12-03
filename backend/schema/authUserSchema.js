const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authUserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: 'datamanager',
	}
});

authUserSchema.methods.getJWTToken = function () {
	return jwt.sign(
		{ id: this._id },
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_EXPIRES_IN }
	);
};

authUserSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('AuthUser', authUserSchema);
