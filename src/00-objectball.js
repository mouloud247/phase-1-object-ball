function gameObject() {
    const statsOfTheGame = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': { "number": 0, "Shoe": 16, "Points": 22, "Rebounds": 12, "Assists": 12, "Steals": 3, "Blocks": 1, "Slam Dunks": 1 },
                'Reggie Evans': { "number": 30, "Shoe": 14, "Points": 12, "Rebounds": 12, "Assists": 12, "Steals": 12, "Blocks": 2, "Slam Dunks": 7 },
                'Brook Lopez': { "number": 11, "Shoe": 17, "Points": 17, "Rebounds": 19, "Assists": 10, "Steals": 3, "Blocks": 1, "Slam Dunks": 15 },
                'Mason Plumlee': { "number": 1, "Shoe": 19, "Points": 26, "Rebounds": 12, "Assists": 6, "Steals": 3, "Blocks": 8, "Slam Dunks": 5 },
                'Jason Terry': { "number": 31, "Shoe": 15, "Points": 19, "Rebounds": 2, "Assists": 2, "Steals": 4, "Blocks": 11, "Slam Dunks": 1 }
            },
        },


        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': { "number": 4, "Shoe": 18, "Points": 10, "Rebounds": 1, "Assists": 1, "Steals": 2, "Blocks": 7, "Slam Dunks": 2 },
                'Bismak Biyombo': { "number": 0, "Shoe": 16, "Points": 12, "Rebounds": 4, "Assists": 7, "Steals": 7, "Blocks": 15, "Slam Dunks": 10 },
                'DeSagna Diop': { "number": 2, "Shoe": 14, "Points": 24, "Rebounds": 12, "Assists": 12, "Steals": 4, "Blocks": 5, "Slam Dunks": 5 },
                'Ben Gordon': { "number": 8, "Shoe": 15, "Points": 33, "Rebounds": 3, "Assists": 2, "Steals": 1, "Blocks": 1, "Slam Dunks": 0 },
                'Brendan Haywood': { "number": 33, "Shoe": 15, "Points": 6, "Rebounds": 12, "Assists": 12, "Steals": 22, "Blocks": 5, "Slam Dunks": 2 }
            }
        }
    };
    return statsOfTheGame;
}



function numPointsScored(playersName) {
    const states = gameObject();
    const homePlayers = Object.keys(states.home.players);
    const awayPlayers = Object.keys(states.away.players);

    if (homePlayers.includes(playersName)) {
        return states.home.players[playersName].Points;
    } else if (awayPlayers.includes(playersName)) {
        return states.away.players[playersName].Points;
    }

    return "Player not found";
}
debugger

function shoeSize(playersName) {
    const states = gameObject();
    const homePlayers = Object.keys(states.home.players);
    const awayPlayers = Object.keys(states.away.players);

    if (homePlayers.includes(playersName)) {
        return states.home.players[playersName].Shoe;
    } else if (awayPlayers.includes(playersName)) {
        return states.away.players[playersName].Shoe;
    }

    return "Player not found";

}

console.log(shoeSize('Ben Gordon'));

debugger

function teamColors(teamName) {
    const states = gameObject();
    if (teamName === 'Brooklyn Nets') return states.home.colors;
    else if (teamName === 'Charlotte Hornets') return states.away.colors;
    return 'Team not found'
}

console.log(teamColors('Brooklyn Nets'));

debugger

function teamNames() {
    const states = gameObject();
    const homeName = states.home.teamName;
    const awayName = states.away.teamName;
    const teamsNames = [];
    teamsNames.push(homeName, awayName);
    return teamsNames;

}

debugger

function playerNumbers(teamName) {
    const states = gameObject();

    if (states.home.teamName === teamName) {
        return Object.values(states.home.players).map(player => player.number);
    } else if (states.away.teamName === teamName) {
        return Object.values(states.away.players).map(player => player.number);
    } else {
        return "Team not found";
    }
}
debugger


function playerStats(playersName) {
    const states = gameObject();
    const homePlayers = Object.keys(states.home.players);
    const awayPlayers = Object.keys(states.away.players);

    if (homePlayers.includes(playersName)) {
        return states.home.players[playersName];
    } else if (awayPlayers.includes(playersName)) {
        return states.away.players[playersName];
    }

    return "Player not found";

}

debugger

function bigShoeRebounds() {
    const states = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = null;

    debugger
    for (const player of Object.values(states.home.players)) {
        if (player.Shoe > largestShoeSize) {
            largestShoeSize = player.Shoe;
            playerWithLargestShoeSize = player;
        }
    }

    debugger
    for (const player of Object.values(states.away.players)) {
        if (player.Shoe > largestShoeSize) {
            largestShoeSize = player.Shoe;
            playerWithLargestShoeSize = player;
        }
    }
    debugger
    if (playerWithLargestShoeSize) {
        return playerWithLargestShoeSize.Rebounds;
    } else {
        return "No player found";
    }
}

debugger

function mostPointsScored() {
    const states = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = null;


    const homePlayers = Object.entries(states.home.players);
    const awayPlayers = Object.entries(states.away.players);
    const players = homePlayers.concat(awayPlayers);

    for (const player of players) {

        if (player[1].Points > mostPoints) {
            mostPoints = player[1].Points;
            playerWithMostPoints = player[0];
        }
    }

    return playerWithMostPoints;


}

debugger

function winningTeam() {
    const states = gameObject();

    const homePointsArray = Object.values(states.home.players);
    const awayPointsArray = Object.values(states.away.players);

    let homeSum = 0;
    let awaySum = 0;
    debugger
    for (i = 0; i < homePointsArray.length; i++) {
        let poi = homePointsArray[i].Points;
        homeSum = homeSum + poi;
    }

    debugger
    for (i = 0; i < awayPointsArray.length; i++) {
        let poi = awayPointsArray[i].Points;
        awaySum = awaySum + poi;
    }

    return (homeSum > awaySum) ? `The winning team is Brooklyn Nets with ${homeSum} points` : `The winning team is Charlotte Hornets with ${awaySum} points`

}

debugger


function playerWithLongestName() {
    const stats = gameObject();
    let longestName = '';
    let playerWithLongestName = '';
    debugger
    for (const player in stats.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    debugger
    for (const player in stats.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }

    return playerWithLongestName;
}
debugger



function doesLongNameStealATon() {
    const stats = gameObject();
    let longestName = '';
    let playerWithLongestName = '';
    debugger
    for (const player in stats.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    debugger
    for (const player in stats.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    debugger
    const playerStatsLongName = stats.home.players[playerWithLongestName] || stats.away.players[playerWithLongestName];
    const mostSteals = Math.max(
        ...Object.values(stats.home.players).map(player => player.Steals),
        ...Object.values(stats.away.players).map(player => player.Steals)
    );

    return playerStatsLongName.Steals === mostSteals;
}


debugger

