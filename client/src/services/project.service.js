import authHeader from "./auth-header";
const axios = require("axios").default;
const API_URL = "http://localhost:3030/projects/";

class Project{
    getProjects(){
        return axios.get(API_URL,{}).then(result => {
            return result.data;
        });
    }

    getProject(projectId) {
        return axios.get(API_URL, projectId, {headers:authHeader}).then(result => {
            return result.data;
        });
    }

    saveProject(project){
        return axios.post(API_URL, project, {headers:authHeader}).then(result => {
            return result.data;
        });
    }

    editProject(projectId, project){
        return axios.put(API_URL, {projectId, project}, {headers:authHeader}).then(result => {
            return result.data;
        });
    }

    delProject(projectId){
        return axios.delete(API_URL, projectId, {headers:authHeader}).then(result => {
            return result.data;
        });
    }
}

export default new Project();