const CustomAPIError = require('../errors/custom-error');

module.exports.login = async (req, res) => {
	const { username, password } = req.body;
	console.log(username, password);
	// mongoose validation
	// Joi
	// check in the controller
	if (!username || !password) {
		throw new CustomAPIError('Please provide email and password', 400);
	}
	res.send('Fake Login/Register/Signup');
};

module.exports.dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		mesg: `Hello, John Doe`,
		secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
	});
};
