import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Project from "../services/project.service";

const data = Project.getProjects();

const ProjectList = (data) => {
    let htmlStr = "";
    if(data.length > 0) {
        data.forEach((obj) => {
            htmlStr += "<div className='card'>";
            htmlStr += "<header className='card-header'>";
            htmlStr += "<h1 className='title is-1'>obj.projectTitle</h1>";
            htmlStr += "</header>";
            htmlStr += "<div className='card-content'>";
            htmlStr += "</div>";
            htmlStr+="</div>";
        });
    }
    return htmlStr;
}

export const Projects = () => {
    return(
        <ProjectList/>
    );
}