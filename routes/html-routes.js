var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/welcomePage.html"));
    });

    app.get("/game", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/questions.html"));
    });

    app.get("/#finish_page", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/#"));
    });

};