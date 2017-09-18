var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    //If the user has an account, send them to game page.
    app.get("/", function(req, res) {
        if (req.user) {
            res.redirect("/game");
          }
        res.sendFile(path.join(__dirname, "../public/welcomePageSignUp.html"));
    });

    app.get("/login", function(req, res) {
    //If the user has an account, send them to game page.
    if (req.user) {
        res.redirect("/game");
      }
        res.sendFile(path.join(__dirname, "../public/welcomePage.html"));
    });

    //If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/game", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/Questions.html"));
    });

    app.get("/results", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/results_input.html"));
    });

};