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

router.post('/login', authLogin);

router.get('/refresh-token', refreshToken);

router.get('/logout', authLogout);

router.put('/update-adminapi', updateAdminapi);

module.exports = router;
