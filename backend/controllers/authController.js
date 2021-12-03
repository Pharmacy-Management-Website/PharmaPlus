const AuthUser = require('../schema/authUserSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ? @desc: Create Data manager
// ? @route: POST /adminapi/create-data-manager
exports.createDataManager = async (req, res, next) => {
	try {
		const {
			username,
			password
		} = req.body;
		const dataManager = await AuthUser.findOne({ username });
		if (dataManager) {
			return res.status(400).json({
				message: 'Data Manager already exists'
			});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const newDataManager = new AuthUser({
			username,
			password: hashedPassword
		});
		await newDataManager.save();
		const accesstoken = createAccessToken({ id: newDataManager._id });
		res.status(201).json({
			message: 'Data Manager created successfully',
			accesstoken,
			user: newDataManager
		});
	} catch (error) {
		res.status(500).json({
			message: 'Creating user failed'
		});
	}
};

const createAccessToken = (user) => {
	return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '11m' })
}
