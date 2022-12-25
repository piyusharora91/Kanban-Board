import React from 'react';
import DisplayProjectCard from './DisplayProjectCard.js';
import { capitalizeAndRemoveDash } from '../../../../custom-files/textCasingConversions.js';
import { boardDetailswithProjectsList } from '../../../../custom-files/records.js';

const BoardSectionDisplay = ({ boardSection, onDragStart, onDragLeave, onDragOver, dropOnSectionBoard }) => {
    return (
        <div className="board-section" onDragLeave={(e) => onDragLeave(e)}>
            <div className="board-section-header">{capitalizeAndRemoveDash(boardSection)}</div>
            {/* all projects display in a section, code starts here */}
            <div className="projects-list" id={`${boardSection}-section`}
                onDragOver={(e) => onDragOver(e, boardSection)}
                onDrop={(e) => dropOnSectionBoard(e, boardSection)}>

                {Object.keys(boardDetailswithProjectsList[boardSection]).map((project) => {
                    return (
                        //a particular project display in a section, code starts here 
                        <DisplayProjectCard boardSection={boardSection} project={project} onDragStart={onDragStart}
                            key={project} />
                        // a particular project display in a section, code ends here 
                    );
                })}

            </div>
            {/* all projects display in a section, code ends here */}
            <div className="add-new-task-button-container">
                <button id="add-new-task" className={`add-new-task ${boardSection}-section-child`}>
                    <i className="fa-solid fa-plus"></i>
                    <span>Add New Task</span>
                </button>
            </div>
        </div>
    );
}

export default BoardSectionDisplay;