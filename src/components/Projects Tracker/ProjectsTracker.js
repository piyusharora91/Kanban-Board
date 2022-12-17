import React from 'react';
import '../../styles/css/ProjectsTracker.css';
import BasicInfo from './components/BasicInfo.js';
import Statistics from './components/Statistics.js';
import Board from './components/Board';

const ProjectsTracker = () => {
    return (
        <div className="projects-tracker-container-main" id="projects-tracker-container-main">
            <BasicInfo />
            <Statistics />
            <Board />
        </div>
    );
}

export default ProjectsTracker;