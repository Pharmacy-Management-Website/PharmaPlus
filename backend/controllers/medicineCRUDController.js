const Medicine = require('../schema/medicineSchema.js');

// ? @desc: Get All Medicines
// ? @route: GET /medapi/medicines
exports.getAllMedicines = async (req, res, next) => {
	try {
		const medicines = await Medicine.find();
		res.status(200).json({
			medicines: medicines
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

// ? @desc: Add Medicine
// ? @route: POST /medapi/addmedicine
exports.addMedicine = async (req, res, next) => {
	try {
		const medicine = new Medicine({
			name: req.body.name,
			content: req.body.content,
			company: req.body.company,
			price: req.body.price,
			inStock: req.body.inStock,
			shelfNo: req.body.shelfNo,
		});
		const result = await medicine.save();
		res.status(201).json({
			message: 'Medicine Added Successfully',
			result: result
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};
