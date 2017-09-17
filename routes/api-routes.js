var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

//If the user has valid login credentials, send them to the game page.
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/game");
      }); 

//Log the user in when an account is created.
    app.post("/api/signup", function(req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            res.redirect(307, "/api/login");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
       });
    }); 
    
// Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

//Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      //Otherwise send back the user's email and id
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

//GET route that gets the computer guess at the end of the game.
    app.get("/api/game_choices", function (req, res) {
        db.Game_Choice.findOne({
            where: {
                song_id: req.params.song_id
            }
        }).then(function(dbGame_Choice) {
            res.json(dbGame_Choice);
        });
    });

//POST route that allows user to add a new song to the database.
    app.post("/api/all_songs", function(req, res) {
        db.All_Song.create({
            Decade: req.body.Decade,
            Genre: req.body.Genre,             
            Danceability: req.body.Danceability,            
            Tempo: req.body.Tempo,
            Arist: req.body.Artist,
            Title: req.body.Title
        }).then(function(dbAll_Song) {
            res.json(dbAll_Song);
        }).catch(function(err) {
            res.json(err);
        });
    });

};
