'use strict'

import Channel from '../channel'
import {GAME} from '../constant'

const getGameGeneral = (year,month,date) => {
    return (dispatch,getStore) => {
        if (getStore().application.navigator === 'gameIndex') {
            const channel = new Channel()
            return channel.getGameGeneral(year,month,date)
                .then(data => {
                    return dispatch({
                        type: GAME.INFO,
                        data
                    })
                })
        }
    }
}

/**
 * Get every team's standing
 */
const getLeagueStanding = () => {
    return (dispatch, getStore) => {
        if (getStore().standing.loaded) {
            return Promise.resolve(dispatch({
                type: GAME.STANDING,
                data: getStore().standing.data
            }))
        }

        const d = new Date()
        const currentMonth = d.getMonth() + 1
        let year
        if (currentMonth >= 10) {
            year = d.getFullYear().toString()
        } else {
            year = d.getFullYear().toString() - 1
        }

        const channel = new Channel()
        return channel.getLeagueStanding(year)
            .then(data => {
                return dispatch({
                    type: GAME.STANDING,
                    data
                })
            })
    }
}

export default {
    getLeagueStanding,
    getGameGeneral
}