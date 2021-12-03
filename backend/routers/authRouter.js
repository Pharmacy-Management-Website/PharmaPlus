const express = require('express');
const router = express.Router();

const {
	createDataManager
} = require('../controllers/authController.js');

// ? POST Create One data manager
router.post('/create-data-manager', createDataManager);

module.exports = router;
