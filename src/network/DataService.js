'use strict';

var SERVER = 'http://www.yudianer.com/api';

function getProjectList(){
    return fetch(`${SERVER}/project`)
		.then((response) => response.json())
		.then((responseData) => {
			console.info("加载项目完成：",responseData.data);
			return responseData.data;
		});
}

function getProjectIssueList(projectId) {
	console.log(`${SERVER}/project/${projectId}/issues`);
	return fetch(`${SERVER}/project/${projectId}/issues`)
		.then((response) => response.json())
		.then((responseData)=>{
			console.info(`加载\"项目${projectId}\"议题完成：`,responseData.data);
			return responseData.data;
		});
}

function getIssuesList() {
	return fetch(`${SERVER}/issues`)
		.then((response) =>  response.json())
		.then((responseData) => {
			console.info(`加载议题完成：`,responseData.data);
			return responseData.data;
		});
}

var DataService = {
	'getProjectList': getProjectList,
	'getProjectIssueList':getProjectIssueList,
	'getIssuesList': getIssuesList,
};


module.exports = DataService;