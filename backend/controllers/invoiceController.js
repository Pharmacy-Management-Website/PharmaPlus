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
		for (let i = 0; i < purchasedMedicines.length; i++) {
			const medicine = await Medicine.findById(purchasedMedicines[i].medicine);
			if (!medicine)
				return res.status(404).json({
					success: false,
					message: 'Medicine not found'
				});
			if (medicine.stockDetails[0].inStock < purchasedMedicines[i].qty)
				return res.status(400).json({
					success: false,
					message: 'Medicine quantity not available'
				});
			// ? update medicine stock
			medicine.stockDetails[0].inStock -= purchasedMedicines[i].qty;
			await medicine.save();
			if (medicine.stockDetails[0].expDate < (Date.now() + 30))
				return res.status(400).json({
					success: false,
					message: 'Medicine is about to expire'
				});
		}
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

