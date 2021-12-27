const AuthUser = require('../schema/authUserSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/tokenizer.js');

// ? @desc: Create Data manager
// ? @route: POST /adminapi/create-data-manager
exports.createDataManager = async (req, res, next) => {
	try {
		const {
			username,
			password
		} = req.body;
		const dmExists = await AuthUser.findOne({ username });
		if (dmExists) {
			return res.status(400).json({
				msg: 'Data manager already exists'
			});
		}
		const newDataManager = await AuthUser.create({
			username,
			password
		});
		if (newDataManager) {
			res.status(200).json({
				message: 'Data Manager created successfully',
				_id: newDataManager._id,
				username: newDataManager.username,
				password: newDataManager.password,
				token: generateToken(newDataManager._id)
			});
		}
	} catch (error) {
		res.status(500).json({
			message: 'Creating user failed'
		});
	}
};

// ? @desc: Login
// ? @route: POST /authapi/login
exports.authLogin = async (req, res, next) => {
	try {
		const {
			username,
			password
		} = req.body;
		if (!username || !password) {
			return res.status(401).json({
				success: false,
				message: 'Invalid credentials'
			});
		}
		const dataManager = await AuthUser.findOne({ username });
		if (dataManager && (await dataManager.validatePassword(password))) {
			res.status(200).json({
				message: 'Auth successful',
				_id: dataManager._id,
				username: dataManager.username,
				password: dataManager.password,
				token: generateToken(dataManager._id)
			});
		}
		else {
			res.status(401).json({
				success: false,
				message: 'Invalid credentials'
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Invalid credentials'
		});
	}
}

// ? @desc: Logout
// ? @route: POST /authapi/logout
exports.authLogout = async (req, res, next) => {
	res.cookie("token", null, {
		expires: new Date(Date.now()),
		httpOnly: true,
	});
	res.status(200).json({
		success: true,
		message: "Logged Out",
	});
};

// ? @desc: Refresh token
// ? @route: GET /authapi/refresh_token
exports.refreshToken = async (req, res, next) => {
	try {
		const rf_token = req.cookies.refreshtoken;
		if (!rf_token)
			return res.status(400).json({
				success: false,
				message: "Please Login"
			});
		jwt.verify(rf_token, process.env.JWT_REFRESH_SECRET, (error, user) => {
			if (error)
				return res.status(400).json({
					msg: "Please Login"
				})
			const accesstoken = createAccessToken({ id: user.id });
			res.json({ accesstoken });
		});
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
}


// ? @desc: Update Adminapi details
// ? @route: PUT /adminapi/update-adminapi
exports.updateAdminapi = async (req, res, next) => {
	try {
		const {
			username,
			password
		} = req.body;
		const dataManager = await AuthUser.findOne({ username });
		if (!dataManager) {
			return res.status(400).json({
				message: 'Data Manager does not exist'
			});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const updatedDataManager = await AuthUser.findOneAndUpdate({ username }, {
			username,
			password: hashedPassword
		}, {
			new: true,
			runValidators: true,
			useFindAndModify: false,
		});
		res.status(200).json({
			message: 'Data Manager updated successfully'
		});
	} catch (error) {
		res.status(500).json({
			message: 'Updating user failed'
		});
	}
}


// const createAccessToken = (user) => {
// 	return jwt.sign(user, process.env.JWT_ACCESS_SECRET, { expiresIn: '11m' });
// }

// const createRefreshToken = (user) => {
// 	return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
// }
