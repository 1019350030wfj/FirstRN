'use strict'

const d = new Date()
const currentMonth = d.getMonth() + 1
let season
if (currentMonth >= 10) {
    season = d.getFullYear().toString() + '-' + (d.getFullYear() + 1).toString().substring(2, 4)
} else {
    season = (d.getFullYear().toString() - 1) + '-' + d.getFullYear().toString().substring(2, 4)
}

const address = {
    /**
     * All game of the date
     * @params gameDate: {String} {Format: yearmonthdate}
     * @example gameDate: 20151125
     */
    gameGeneral: (gameDate) => {
        return `http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${gameDate}/games.json`
    },

    /**
     * Current league standing
     * @params year {String}
     * @example year: 2015
     */
    leagueStanding: (year) => {
        return `http://data.nba.com/data/json/cms/${year}/league/standings.json`
    },
}
export default address

