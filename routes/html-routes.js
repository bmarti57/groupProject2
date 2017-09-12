var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/#"));
    });

    app.get("/#game_page", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/#"));
    });

    app.get("/#finish_page", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/#"));
    });

};