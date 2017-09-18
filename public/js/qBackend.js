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

function databaseSearch(qNum, keystring, yes, gameID) {
    switch (qNum) {
        case 1:
            if (yes) {
                all_songs.findAll({
                    where: {
                        Artist: {
                            $not: letters[keystring] + '%'
                        }
                    }
                });
            }
            else {
                all_songs.findAll({
                    where: {
                        Artist: letters[keystring] + '%'
                    }
                });
            },
            break;
        case 2:
            if (yes) {
                all_songs.findAll({
                    where: {
                        Title: {
                            $not: letters[keystring] + '%'
                        }
                    }
                });
            }
            else {
                all_songs.findAll({
                    where: {
                        Title: letters[keystring] + '%'
                    }
                });
            },
            break;
        case 3:
            if (yes) {
                all_songs.findAll({
                    where: {
                        Tempo: {
                            $gte: 108
                        },
                        game_id: gameID
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
                })
            },
            break;
        case 4:
            if (yes) {
                all_songs.findAll({
                    where: {

                    }
                })
            }
    }
}