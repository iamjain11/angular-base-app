var User = require('../models/user.model');
var path = require('path');

module.exports = function (app) {

    // sample api route
    app.get('/api/users', function (req, res) {
        // use mongoose to get all Users in the database
        User.find(function (err, nerds) {

            if (err) {
                return res.send(err);
            } else {
                res.json(nerds);
            }
        });
    });

    app.get('*', function (req, res) {
        let url = path.join(__dirname+'../../../public/index.html')
        res.render(url); // load our public/index.html file
    });

};
