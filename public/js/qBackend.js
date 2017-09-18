// JavaScript source code
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var genres = ['Electronic', 'Folk', 'Jazz', 'Rock/Pop', 'Rap', 'Reggae', 'Religious', 'Vocal'];
var decade = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
var length = ['2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00'];

var keyword;

function genQuestion(qNo) {
    if (qNo === 1 || qNo === 2) {
        keyword = Math.floor(Math.random() * 25);
        if (qNo === 1) {
            $('#qH' + qNo).write('The artist name starts with ' + letters[keyword]);
        }
        else {
            $('#qH' + qNo).write('The song title begins with ' + letters[keyword]);
        }
    }
    else if (qNo === 5) {
        keyword = Math.floor(Math.random() * 6);
        $('#qH' + qNo).write('The song is over  ' + length[keyword] + ' minutes long.');
    }
    else if (qNo === 6 || qNo === 7) {
        keyword = Math.floor(Math.random() * 7);
        if (qNo === 6) {
            $('#qH' + qNo).write('The song came out before ' + decade[keyword]);
        }
        else {
            $('#qH' + qNo).write("The song's genre is  " + genres[keyword]);
        }
    }
    else {
        throw Error;
    }
};

function databaseSearch(qNum, keystring, yes, gameID) {
    switch (qNum) {
        case 1:
            if (yes) {
                game_choices.destroy({
                    where: {
                        Artist: {
                            $not: letters[keystring] + '%'
                        },
                        game_id: gameID
                    }
                });
            }
            else {
                game_choices.destroy({
                    where: {
                        Artist: letters[keystring] + '%',
                        game_id: gameID
                    }
                });
            },
            break;
        case 2:
            if (yes) {
                game_choices.destroy({
                    where: {
                        Title: {
                            $not: letters[keystring] + '%'
                        },
                        game_id: gameID
                    }
                });
            }
            else {
                game_choices.destroy({
                    where: {
                        Title: letters[keystring] + '%',
                        game_id: gameID
                    }
                });
            },
            break;
        case 3:
            if (yes) {
                game_choices.destroy({
                    where: {
                        Tempo: {
                            $gte: 108
                        },
                        game_id: gameID
                    }
                })
            }
            else {
                game_choices.destroy({
                    where: {
                        Tempo: {
                            $lt: 108
                        },
                        game_id: gameID
                    }
                })
            },
            break;
        case 4:
            if (yes) {
                game_choices.destroy({
                    where: {

                    }
                })
            }
    }
}