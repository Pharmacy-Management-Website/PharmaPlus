const express = require('express');
const router = express.Router();

const {
	createDataManager,
	authLogin,
	refreshToken,
	authLogout,
	updateAdminapi
} = require('../controllers/authController.js');
const { isAuthenticated } = require('../middleware/authentication.js');

// ? POST Create One data manager
router.post('/create-data-manager', createDataManager);

// ? POST Login
router.post('/login', authLogin);

// ? GET Refresh Token
router.get('/refresh-token', refreshToken);

// ? GET logout
router.get('/logout', isAuthenticated, authLogout);

// ? PUT Update Adminapi
router.put('/update-adminapi', isAuthenticated, updateAdminapi);

module.exports = router;
