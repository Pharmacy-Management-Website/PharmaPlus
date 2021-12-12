const express = require('express');
const router = express.Router();

const {
	createDataManager,
	authLogin,
	refreshToken,
	authLogout,
	updateAdminapi
} = require('../controllers/authController.js');

// ? POST Create One data manager
router.post('/create-data-manager', createDataManager);

// ? POST Login
router.post('/login', authLogin);

// ? GET Refresh Token
router.get('/refresh-token', refreshToken);

// ? GET logout
router.get('/logout', authLogout);

// ? PUT Update Adminapi
router.put('/update-adminapi', updateAdminapi);

module.exports = router;
