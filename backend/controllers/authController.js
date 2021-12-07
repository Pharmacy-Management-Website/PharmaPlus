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
	return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '11m' })
}
