const Invoice = require('../schema/invoiceSchema.js');
const Medicine = require('../schema/medicineSchema.js');

// ? @desc: Get All Invoices
// ? @route: GET /all-invoices
exports.getAllInvoices = async (req, res) => {
	try {
		const invoices = await Invoice.find({});
		return res.status(200).json({
			success: true,
			length: invoices.length,
			invoices
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

// ? @desc: New Invoice
// ? @route: POST /new-invoice
exports.newInvoice = async (req, res) => {
	try {
		const {
			invoiceNumber,
			invoiceDate,
			customerName,
			customerMobileNumber,
			purchasedMedicines,
		} = req.body;
		const medicineArray = [];
		for (let i = 0; i < purchasedMedicines.length; i++) {
			const medicine = await Medicine.findById(purchasedMedicines[i].medicine);
			medicineArray.push(medicine);
		}
		console.log(medicineArray);
		medicineArray.forEach(async (medicine) => {
			console.log(medicine.stockDetails);
		});
		const newInvoice = new Invoice({
			invoiceNumber,
			invoiceDate,
			customerName,
			customerMobileNumber,
			purchasedMedicines
		});
		const invoice = await newInvoice.save();
		return res.status(200).json({
			success: true,
			invoice
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: error.message
		});
	}
};

// ? @desc: Get Invoice By Id
// ? @route: GET /invoice/:id
exports.getInvoiceById = async (req, res) => {
	try {
		const invoice = await Invoice.findById(req.params.id);
		if (!invoice)
			return res.status(404).json({
				success: false,
				message: 'Invoice not found'
			});
		return res.status(200).json({
			success: true,
			invoice
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

// ? @desc: Delete Invoice
// ? @route: DELETE /invoice/:id
exports.deleteInvoice = async (req, res) => {
	try {
		const invoice = await Invoice.findById(req.params.id);
		if (!invoice)
			return res.status(404).json({
				success: false,
				message: 'Invoice not found'
			});
		await Invoice.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			success: true,
			message: 'Invoice deleted successfully'
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

