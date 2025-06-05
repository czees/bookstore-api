const express = require('express');

const {register, login} = require('../models/user')


const userRoutes = express.Router();


userRoutes.post('/register', register);
userRoutes.post('/login', login);


module.exports = userRoutes;