var ModelManager = require('../models/manager');

var masterManager = new ModelManager();

module.exports = function (app) {
    app.route("/admin")
    .get(function (req, res, next) {
        res.render("index", {
            masterManager: masterManager
        });
    });

    // Main index for a model.
    app.route("/admin/:slug")
    .get(function (req, res, next) {
        console.log("Slug: " + req.params.slug);
        var manager = masterManager.managers[req.params.slug];
        res.render("list", {
            masterManager: masterManager,
            manager: manager
        });
    });

    // app.route("/admin/:slug/detail/:id")
    // .get(function (req, res, next) {
    //     var manager = masterManager.managers[req.params.slug];
    //     var entity = masterManager.get(req.params.id);
    //     res.render("detail", {
    //         manager: manager,
    //         entity: entity
    //     });
    // });

    app.route("/admin/:slug/edit/:id")
    .get(function (req, res, next) {
        var manager = masterManager.managers[req.params.slug];
        var entity = manager.get(req.params.id);
        res.render("edit", {
            masterManager: masterManager,
            manager: manager,
            entity: entity
        });
    });

    app.route("/admin/:slug/delete/:id")
    .get(function (req, res, next) {
        var manager = masterManager.managers[req.params.slug];
        var entity = manager.get();
        res.render("delete", {
            masterManager: masterManager,
            manager: manager,
            entity: entity
        });
    });

};