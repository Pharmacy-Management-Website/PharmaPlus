const express = require('express');
const router = express.Router();

const {
	getAllMedicines,
	addMedicine
} = require('../controllers/medicineCRUDController.js');

// ? GET all medicines
router.get('/medicines', getAllMedicines);

// ? POST Add new medicine
router.post('/addmedicine', addMedicine);

module.exports = router;
