const jwt = require('jsonwebtoken');

const { BadRequestError } = require('../errors');

module.exports.login = async function (req, res) {
	const { username, password } = req.body;
	// mongoose validation
	// Joi
	// check in the controller
	if (!username || !password) {
		throw new BadRequestError('Please provide email and password.');
	}
	const id = new Date().getDate();
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});

	res.status(200).json({ msg: 'user created', token });
};

module.exports.dashboard = async function (req, res) {
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello, ${req.user.username}`,
		secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
	});
};
