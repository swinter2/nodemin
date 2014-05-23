module.exports = function (app) {
    app.route("/admin")
    .get(function (req, res, next) {
        res.render("index", {
            models: new ModelManager()
        });
    });
};