var express = require('express'),
    userRouter = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app) {
    app.use('/users', userRouter);
    app.use('/user', userRouter);
};

// router.get('/', function (req, res, next) {
//     res.render('index', {
//       title: 'Generator-Express MVC',
//       articles: []
//     });
// });


userRouter.get('/', function (req, res, next) {
    User.find(function (err, users) {
        console.log(JSON.stringify(users));
        if (err) return next(err);
        res.render('index', {
            title: 'Generator-Express MVC',
            users: JSON.stringify(users)
        });
    });
});