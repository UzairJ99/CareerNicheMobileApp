/* 
This file acts as the orchestration API layer for the app. Provides
an API gateway to handle client requests and forwarding to the backend
services.
*/
var express = require('express');
var router = express.Router();
var UserService = require('./UserService');
var GurucanService = require('./GurucanService');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
});

router.use(GurucanService);
router.use(UserService);

module.exports = router;