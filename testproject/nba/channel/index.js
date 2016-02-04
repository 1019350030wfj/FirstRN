'use strict'

import address from './address'
import producer from './producer'

export default class Channel {
    // 构造
      constructor(options) {
        this.options = options
      }

    getGameGeneral (year,month,date) {
        //获取请求地址
        const gen_url = address.gameGeneral(`${year}${month}${date}`)
        return window.fetch(gen_url)
            .then(res => res.json())
            .then(data => {
                //得到数据后，解析成我们想要的数据
                const allGames = producer.gameGeneral(data)
                if (allGames.live.length + allGames.unstart.length + allGames.over.length === 0) {
                    return this.getGameGeneral(year,month,parseInt(date,10)+1)
                }
                allGames.gameDate = `${year}-${month}-${date}`
                return allGames
            })
    }

    getLeagueStanding(year) {
        const stand_url = address.leagueStanding(year)
        return window.fetch(stand_url)
            .then(res => res.json())
            .then(data => producer.leagueStanding(data))
    }
}