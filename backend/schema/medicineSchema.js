const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
	med_id: {
		type: Number,
		length: [4, "med_id must be 4 digits"],
		required: [true, "med_id is required"],
	},
	name: {
		type: String,
		required: true,
		unique: true
	},
	composition: {
		type: String
	},
	stockDetails: [
		{
			price: {
				type: Number,
				required: true
			},
			inStock: {
				type: Number,
				required: true
			},
			mfgDate: {
				type: Date,
				default: Date.now(),
				required: true
			},
			expDate: {
				type: Date,
				default: Date.now() + (1000 * 60 * 60 * 24 * 182),
				required: true
			},
		}
	]
}, {
	timestamps: true
});

module.exports = mongoose.model('Medicine', medicineSchema);
