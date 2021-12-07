const express = require('express');
const router = express.Router();

const {
	getAllMedicinesDetails,
	addMedicineDetails,
	getMedicineDetails,
	updateMedicineDetails,
	deleteMedicineDetails
} = require('../controllers/medicineCRUDController.js');

const { authorizeRoles } = require('../middleware/authRoles.js');

// ? GET all medicines
router.get('/medicines', getAllMedicinesDetails, authorizeRoles("datamanager"));

// ? POST Add new medicine
router.post('/addmedicine', addMedicineDetails);

// ? GET medicine by ID
router.get('/medicine/:id', getMedicineDetails);

// ? PATCH Update medicine details
router.put('/medicine/:id', updateMedicineDetails);

// ? DELETE Medicine details
router.delete('/medicine/:id', deleteMedicineDetails);


module.exports = router;
