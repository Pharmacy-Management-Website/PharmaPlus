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
		const refreshtoken = createRefreshToken({ id: newDataManager._id });
		res.cookie('refreshtoken', refreshtoken, {
			httpOnly: true,
			path: '/auth/refresh-token',
			maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
		});
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
		const user = await AuthUser.findOne({ username });
		if (!user) {
			return res.status(401).json({
				success: false,
				message: 'No user found'
			});
		}
		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch) {
			return res.status(401).json({
				message: 'Auth failed'
			});
		}
		const accesstoken = createAccessToken({ id: user._id });
		const refreshtoken = createRefreshToken({ id: user._id });
		res.cookie('refreshtoken', refreshtoken, {
			httpOnly: true,
			path: '/auth/refresh-token',
			maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
		});
		res.status(200).json({
			message: 'Auth successful',
			accesstoken,
			user
		});
	} catch (error) {
		res.status(500).json({
			message: 'Login failed'
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


const createAccessToken = (user) => {
	return jwt.sign(user, process.env.JWT_ACCESS_SECRET, { expiresIn: '11m' });
}

const createRefreshToken = (user) => {
	return jwt.sign(user, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
}
