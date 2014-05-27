var ModelManager = require('../models/manager');

var masterManager = new ModelManager();

module.exports = function (app) {
    app.route("/admin")
    .get(function (req, res, next) {
        res.render("index", {
            manager: masterManager
        });
    });

    // NOT NEEDED: Map routes for the admin manager.
    // for (var i in masterManager.managers) {
    //     masterManager.managers[i].route(app);
    // }
};