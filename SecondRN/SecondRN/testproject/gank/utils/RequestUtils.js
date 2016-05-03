'use strict';

import DateUtils from './DateUtils';

const DELAY_TIME = 10*1000;

const delay = (ms) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error('timeout'))
        },ms);
    });
}

const fetchWithTimeout = (timeout,...args) => {
    return Promise.race([fetch(...args),delay(timeout)]);//获得先返回的结果
}

const RequestUtils = {
    API_DATE: 'http://gank.io/api/day/history',
    API_DAILY: 'http://gank.io/api/day/',

    getDateArray() {
        //then前面发生异常，后面的将不会被调用
        //返回json对象
        return fetchWithTimeout(DELAY_TIME,this.API_DATE).then(response => response.json());
    },

    async getContents (dateArray) {
        let contentUrlArray = dateArray.map(DateUtils.convertDate).map((date) => this.API_DAILY + date)
        let promises = contentUrlArray.map(
            (url) => fetchWithTimeout(DELAY_TIME,url).then(response => response.json())
        );

        let responseDatasCopy;
        await Promise.all(promises).then(responseDatas => {
            responseDatas.forEach(function(element,index) {
                element.date = dateArray[index]
            })
            responseDatasCopy = responseDatas
        })
        return responseDatasCopy;
    }
}

module.exports = RequestUtils;
