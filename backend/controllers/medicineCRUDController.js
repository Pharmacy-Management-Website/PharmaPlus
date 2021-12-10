const Medicine = require('../schema/medicineSchema.js');
const ApiFeatures = require('../utils/apiFeatures.js');

// ? @desc: All medicine details
// ? @route: GET /medapi/medicines
exports.getAllMedicinesDetails = async (req, res, next) => {
	try {
		const medicines = await Medicine.find();
		res.status(200).json({
			success: true,
			medicines: medicines,
			length: medicines.length
		});

		
		// const resultPerPage = 2;
		// const medCounts = await Medicine.countDocuments();
		// const apiFeature = new ApiFeatures(Medicine.find(), req.query)
		// 	.search();
		// let medicines = await apiFeature.query;
		// let filteredMedCounts = medicines.length;
		// apiFeature.pagination(resultPerPage);
		// res.status(200).json({
		// 	success: true,
		// 	medicines: medicines,
		// 	medCounts: medCounts,
		// 	resultPerPage,
		// 	filteredMedCounts,
		// });
		
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};

// ? @desc: Add Medicine details
// ? @route: POST /medapi/addmedicine
exports.addMedicine = async (req, res, next) => {
	try {
		const medicine = new Medicine({
			med_id: req.body.med_id,
			name: req.body.name,
			composition: req.body.composition,
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

// ? @desc: Add stock details
// ? @route: POST /medapi/addstockdetails/:id
exports.addStockDetails = async (req, res, next) => {
	try {
		const {
			price, inStock
		} = req.body;
		const medStockDetails = {
			price: price,
			inStock: inStock
		}
		const medicine = await Medicine.findById(req.params.id);
		if (!medicine)
			return res.status(404).json({
				success: false,
				message: 'Medicine Not Found'
			});
		medicine.stockDetails.push(medStockDetails);
		await medicine.save();
		res.status(200).json({
			success: true,
			message: 'Added stock details',
			medicine: medicine
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
}

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

// ? @desc: Delete Medicine stock details
// ? @route: DELETE /medapi/medicine/:id/stockdetails/:stockId
exports.deleteMedicineStockDetails = async (req, res, next) => {
	try {
		const medicine = await Medicine.findById(req.params.id);
		if (!medicine) {
			return res.status(404).json({
				success: false,
				message: 'Medicine Not Found'
			});
		}
		const stockDetails = medicine.stockDetails.find(stock => stock._id == req.query.stockId);
		if (!stockDetails) {
			return res.status(404).json({
				success: false,
				message: 'Stock details Not Found'
			});
		}
		medicine.stockDetails.remove(stockDetails);
		await medicine.save();
		res.status(200).json({
			success: true,
			message: 'Stock details Deleted Successfully',
			medicine: medicine
		});
	} catch (error) {
		res.status(500).json({
			message: error.message
		});
	}
};
