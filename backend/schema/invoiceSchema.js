const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
	invoiceNumber: {
		type: String,
		required: true,
		unique: true
	},
	invoiceDate: {
		type: Date,
		default: Date.now,
		required: true
	},
	customerName: {
		type: String,
		// required: true
	},
	customerMobileNumber: {
		type: Number,
		length: 10,
		// required: true
	},
	purchasedMedicines: [
		{
			name: {
				type: String,
				required: true
			},
			qty: {
				type: Number,
				required: true
			},
			price: {
				type: Number,
				required: true
			},
			medicine: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Medicine',
				required: true
			},
		}
	],
});

module.exports = mongoose.model('Invoice', invoiceSchema);
