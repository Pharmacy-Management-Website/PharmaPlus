const express = require('express');
const router = express.Router();

const {
	getAllMedicinesDetails,
	addMedicine,
	addStockDetails,
	getMedicineDetails,
	updateMedicineDetails,
	deleteMedicineDetails,
	deleteMedicineStockDetails
} = require('../controllers/medicineCRUDController.js');

// ? GET all medicines
router.get('/medicines', getAllMedicinesDetails);

// ? POST Add new medicine
router.post('/addmedicine', addMedicine);

// ? POST Add stock details
router.post('/addstockdetails/:id', addStockDetails);

// ? GET medicine by ID
router.get('/medicine/:id', getMedicineDetails);

// ? PATCH Update medicine details
router.put('/medicine/:id', updateMedicineDetails);

// ? DELETE Medicine details
router.delete('/medicine/:id', deleteMedicineDetails);

// ? DELETE Medicine stock details
router.delete('/stock/:id', deleteMedicineStockDetails);


module.exports = router;
