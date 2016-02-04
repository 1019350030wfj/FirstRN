'use strict'

const producer = {
    /**
     * return {live: [], unstart: [], over: []}
     */
    gameGeneral: (res) => {
        let result = {
            unstart: [],
            live: [],
            over: []
        }
        let item

        res['sports_content']['games']['game'].forEach((game, index) => {
            item = {
                id: game.id,
                home: {},
                visitor: {},
                detail: {
                    loaded: false,
                    data: {}
                }
            }

            const sides = ['home', 'visitor']
            sides.forEach(key => {
                item[key]['id'] = game[key]['id']
                item[key]['team'] = game[key]['team_key']
                item[key]['score'] = game[key]['score']
            })

            const process = game['period_time']
            switch (parseInt(process.game_status, 10)) {
                case 1:
                    // Unstart
                    item.type = 'unstart'
                    item.date = process.period_status
                    result.unstart.push(item)
                    break
                case 2:
                    // Live
                    item.type = 'live'
                    let game_clock
                    if (process.game_clock) {
                        game_clock = parseInt(process.game_clock.split(':')[0], 10) < 10 ? '0' + process.game_clock : process.game_clock
                    }
                    item.process = {
                        time: game_clock || 'End',
                        quarter: 'Q' + process.period_value
                    }
                    result.live.push(item)
                    break
                case 3:
                    // Over
                    item.type = 'over'
                    result.over.push(item)
                    break
                default:
                    return
            }
        })

        return result
    },

    /**
     * @return {teamId: { name, states:{} }}
     */
    leagueStanding: (res) => {
        /* data is a array of all teams */
        const data = res.sports_content.standings.team
        let result = {}

        data.forEach(team => {
            result[team.id] = result[team.id] || {}
            result[team.id].abbr = team.abbreviation
            result[team.id].state = team.team_stats
        })
        return result
    },

}

export default producer