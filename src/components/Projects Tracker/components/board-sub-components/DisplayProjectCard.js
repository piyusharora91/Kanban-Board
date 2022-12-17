import React from 'react';
import ProjectAssigneeDisplay from './ProjectAssigneeDisplay.js';
import TimeAndPriorityDisplay from './TimeAndPriorityDisplay.js';
import DueDateDisplay from './DueDateDisplay.js';
import { boardDetailswithProjectsList } from '../../../../custom-files/records.js';
import { capitalizeAndRemoveDash } from '../../../../custom-files/textCasingConversions.js';

const DisplayProjectCard = ({ boardSection, project }) => {
    return (
        <div className={`project-container ${boardSection}-project`} id={`${project}-container`}>
            {/* project header display starts here */}
            <div className="project-header">
                <h1 className="project-title">{capitalizeAndRemoveDash(project)}
                </h1>
                <i className="fa-solid fa-ellipsis-vertical edit-project-icon"></i>
            </div>
            {/* project header display ends here */}
            {/* project basic info starts here */}
            <div className="project-meta-info-container">
                {/* users assigned to project, their image display starts here*/}
                {
                    (boardDetailswithProjectsList[boardSection][project].dueDate) ?
                        <DueDateDisplay boardSection={boardSection} project={project} />
                        :
                        <ProjectAssigneeDisplay boardSection={boardSection} project={project} />
                }
                {/* users assigned to project, their image display ends here*/}

                {/* project time and priority display starts here*/}
                <TimeAndPriorityDisplay boardSection={boardSection} project={project} />
                {/* project time and priority display ends here*/}

                {/* Due Date Section starts here */}
                {(boardDetailswithProjectsList[boardSection][project].dueDate) ?
                    <ProjectAssigneeDisplay boardSection={boardSection} project={project} />
                    :
                    ''
                }
                {/* Due Date Section ends here */}
            </div>
            {/* project basic info ends here */}
        </div>
    );
}

export default DisplayProjectCard;