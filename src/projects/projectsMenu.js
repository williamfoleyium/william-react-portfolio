import React, { Component } from 'react';
import classNames from 'classnames';
import projects from "./projectsData";
import "../styles/projectMenu.css";

export default class projectsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeProject: 1,
    };
  }
  
  handleProjectClick = (project) => {
    this.setState({
        activeProject: project,
    });
  };

  renderContent = (projects) => {
    return projects.map((project, index) => (
        <div key={index} className = {`project-sub-container-${index+1}`}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title}/>
            <div className="link=container">
                <a href={project.website}>WEBSITE</a>
            </div>
        </div>
    ))
  }
  
    render() {
        const {activeProjects} = this.state;
        const projectItems = ["Nautilus", "Heated Gardens", "Buprenorphine Dispenser"];

        return (
        <div className="project-menu">
            <div className="project-item-container">
                {projectItems.map((item, index) => (
                    <div key={index} className={classNames("project-item",)}></div>
                ))}
            </div>
        </div>
    )
  }
}
