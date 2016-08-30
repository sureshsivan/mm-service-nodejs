var express = require('express'),
  homeRouter = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', homeRouter);
};

homeRouter.get('/', function (req, res, next) {
    res.send('Hello World');
});


// router.get('/', function (req, res, next) {
//     User.find(function (err, users) {
//         console.log(JSON.stringify(users));
//         if (err) return next(err);
//         res.render('index', {
//             title: 'Generator-Express MVC',
//             users: JSON.stringify(users)
//         });
//     });
// });