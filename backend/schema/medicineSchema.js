const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	content: {
		type: String,
		required: true
	},
	company: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	inStock: {
		type: Number,
		required: true
	},
	shelfNo: {
		type: Number
	},
	mfgDate: {
		type: Date,
		default: Date.now(),
		required: true
	},
	expDate: {
		type: Date,
		default: Date.now() + (1000 * 60 * 60 * 24 * 365),
		required: true
	},
});

module.exports = mongoose.model('Medicine', medicineSchema);
