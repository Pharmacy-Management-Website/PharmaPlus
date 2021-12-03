const Medicine = require('../schema/medicineSchema.js');
const ApiFeatures = require('../utils/apiFeatures.js');

// ? @desc: All medicine details
// ? @route: GET /medapi/medicines
exports.getAllMedicinesDetails = async (req, res, next) => {
	try {
		// const medicines = await Medicine.find();
		// res.status(200).json({
		// 	success: true,
		// 	medicines: medicines,
		// 	length: medicines.length
		// });

		const resultPerPage = 2;
		const medCounts = await Medicine.countDocuments();
		const apiFeature = new ApiFeatures(Medicine.find(), req.query)
			.search();
		let medicines = await apiFeature.query;
		let filteredMedCounts = medicines.length;
		apiFeature.pagination(resultPerPage);
		// medicines = await apiFeature.query;
		res.status(200).json({
			success: true,
			medicines: medicines,
			medCounts: medCounts,
			resultPerPage,
			filteredMedCounts,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

// ? @desc: Add Medicine details
// ? @route: POST /medapi/addmedicine
exports.addMedicineDetails = async (req, res, next) => {
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
			success: true,
			message: 'Medicine Added Successfully',
			result: result
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

// ? desc: GET Medicine details By ID
// ? route: GET /medapi/medicine/:id
exports.getMedicineDetails = async (req, res, next) => {
	try {
		const medicine = await Medicine.findById(req.params.id);
		if (!medicine)
			return res.status(404).json({
				success: false,
				message: 'Medicine not found'
			});
		res.status(200).json({
			success: true,
			medicine: medicine
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

// ? desc: Update Medicine details
// ? route: PUT /medapi/medicine/:id
exports.updateMedicineDetails = async (req, res, next) => {
	try {
		let medicine = await Medicine.findById(req.params.id);
		if (!medicine)
			return res.status(404).json({
				success: false,
				message: 'Medicine Not Found'
			});
		medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
			useFindAndModify: false
		});
		await medicine.save();
		res.status(200).json({
			success: true,
			message: 'Medicine Updated Successfully',
			medicine: medicine
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

// ? @desc: Delete Medicine details
// ? @route: DELETE /medapi/medicine/:id
exports.deleteMedicineDetails = async (req, res, next) => {
	try {
		const medicine = await Medicine.findById(req.params.id);
		if (!medicine) {
			return res.status(404).json({
				success: false,
				message: 'Medicine Not Found'
			});
		}
		await Medicine.findByIdAndRemove(req.params.id);
		res.status(200).json({
			success: true,
			message: 'Medicine Deleted Successfully'
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};
