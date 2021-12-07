const AuthUser = require('../schema/authUserSchema.js');

exports.authorizeRoles = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				res.status(400).json({
					success: false,
					message: 'You are not allowed to access this data'
				})
			);
		}
		next();
	}
}
