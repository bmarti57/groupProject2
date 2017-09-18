// JavaScript source code
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var genres = ['Electronic', 'Folk', 'Jazz', 'Rock/Pop', 'Rap', 'Reggae', 'Religious', 'Vocal'];
var decade = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
var length = ['2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00'];

var keyword;

function genQuestion(qNo) {
    if (qNo === 1 || qNo === 2) {
        keyword = Math.floor(Math.random() * 25);
        if (qNo === 1) {
            $('#qH' + qNo).write('The artist name starts with ' + letters[keyword]);
            return keyword;
        }
        else {
            $('#qH' + qNo).write('The song title begins with ' + letters[keyword]);
            return keyword;
        }
    }
    else if (qNo === 5) {
        keyword = Math.floor(Math.random() * 6);
        $('#qH' + qNo).write('The song is over  ' + length[keyword] + ' minutes long.');
        return keyword;
    }
    else if (qNo === 6 || qNo === 7) {
        keyword = Math.floor(Math.random() * 7);
        if (qNo === 6) {
            $('#qH' + qNo).write('The song came out before ' + decade[keyword]);
            return keyword;
        }
        else {
            $('#qH' + qNo).write("The song's genre is  " + genres[keyword]);
            return keyword;
        }
    }
    else {
        throw Error;
    }
};

function checkRemaining(game) {
    if (game_choices.findAll({
        where: {
            game_id: game
        }
    }).then(function (res) {
        if (res.length === 0) {
            window.location.replace("../../public/results_input.html");
        }
        else if (res.length === 1) {
            window.location.replace("../../public/results_input.html");
        }
        else {

        }
    })
}


function databaseSearch(qNum, keystring, yes, gameID) {
    switch (qNum) {
        case 1:
            if (yes===0) {
                all_songs.findAll({
                    where: {
                        Artist: {
                            $not: letters[keystring] + '%'
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1)
                    }
                })
            }
            else {
                all_songs.findAll({
                    where: {
                        Artist: letters[keystring] + '%'
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1)
                    }
                })
            }
            break;
        case 2:
            if (yes===0) {
                all_songs.findAll({
                    where: {
                        Title: {
                            $not: letters[keystring] + '%'
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1);
                    }
                })
            }
            else {
                all_songs.findAll({
                    where: {
                        Title: letters[keystring] + '%'
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1);
                    }
                })
            }
            break;
        case 3:
            if (yes===0) {
                all_songs.findAll({
                    where: {
                        Tempo: {
                            $gte: 108
                        },
                        game_id: gameID
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1);
                    }
                })
            }
            else {
                all_songs.findAll({
                    where: {
                        Tempo: {
                            $lt: 108
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1);
                    }
                })
            }
            break;
        case 4:
            if (yes === 0) {
                all_songs.findAll({
                    where: {
                        Danceability: {
                            $gte: .50
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1);
                    }
                })
            }
            else {
                all_songs.findAll({
                    where: {
                        Danceability: {
                            $lt: .50
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1);
                    }
                })
            }
            break;
        case 5:
            if (yes === 0) {
                all_songs.findAll({
                    where: {
                       Length : {
                           $gte: 1000
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1)
                    }
                })
            }
            else {
                all_songs.findAll({
                    where: {
                      Length  : {
                            $lt: 1000
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1)
                    }
                })
            }
            break;
        case 6:
            if (yes === 0) {
                all_songs.findAll({
                    where: {
                        Decade: {
                            $gte: decade[keystring]
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1)
                    }
                })
            }
            else {
                all_songs.findAll({
                    where: {
                        Decade: {
                            $lt: decade[keystring]
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1)
                    }
                })
            }
            break;
        case 7:
            if (yes === 0) {
                all_songs.findAll({
                    where: {
                        Genre: {
                            $not: genres[keystring]
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1)
                    }
                })
            }
            else {
                all_songs.findAll({
                    where: {
                        Genre: {
                            genres[keystring]
                        }
                    }
                }).then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        game_choices.destroy({
                            where: {
                                song_id: res[i].id,
                                game_id: gameID
                            }
                        })
                        checkRemaining(1)
                    }
                })
            }
            break;
    }
}