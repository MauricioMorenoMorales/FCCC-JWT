const express = require('express');
const { dashboard, login } = require('../controllers/main.controllers');
const router = express.Router();

router.route('/dashboard').get(dashboard);
router.route('/login').post(login);

module.exports = router;
