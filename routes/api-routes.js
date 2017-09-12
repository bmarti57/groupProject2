var db = require("../models");

module.exports = function(app) {
    
    app.get("/api/all_songs", function (req, res) {
        db.All_Song.findAll({}).then(function(dbAll_Song) {
            res.json(dbAll_Song);
        });
    });

    app.post("/api/all_songs", function(req, res) {
        db.All_Song.create({
            Decade: req.body.Decade,
            Genre: req.body.Genre,             
            Length: req.body.Length,
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
}