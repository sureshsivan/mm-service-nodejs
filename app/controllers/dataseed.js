var express = require('express'),
    dataSeedRouter = express.Router(),
    mongoose = require('mongoose');

module.exports = function (app) {
    app.use('/seed', userRouter);
};

dataSeedRouter.get('/', function (req, res, next) {
    res.send("Use Specific seed endpoints.");
});