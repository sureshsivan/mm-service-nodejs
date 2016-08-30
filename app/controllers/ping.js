var express = require('express'),
    pingRouter = express.Router();

module.exports = function (app) {
    app.use('/ping', pingRouter);
};

pingRouter.get('/', function (req, res, next) {
    res.send('ping success');
});