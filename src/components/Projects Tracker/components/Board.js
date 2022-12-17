import React, { useEffect } from 'react';
import BoardSectionDisplay from './board-sub-components/BoardSectionDisplay.js';
import '../../../styles/css/ProjectsTracker.css';
import { boardDetailswithProjectsList, randomColors } from '../../../custom-files/records.js';

const Board = () => {
    useEffect(() => {
        const playerFields = document.querySelectorAll('.assignee-profile-image-card');
        playerFields.forEach(playerProfileImage => {
            playerProfileImage.style.background = randomColors[Math.floor(Math.random() * randomColors.length)];
        })
    }, []);

    return (
        <div className="board-container-main">
            {/* board containerheader starts here */}
            <div className="board-header">
                <p>Tasks</p>
                <button id="add-new-task" className="add-new-task">
                    <span>Add New Task</span>
                </button>
            </div>
            {/* board container header ends here */}

            {/* board content starts here */}
            <div className="board">
                {Object.keys(boardDetailswithProjectsList).map((boardSection) => {
                    // board section starts here 
                    return <BoardSectionDisplay boardSection={boardSection} key={boardSection} />
                    // board section ends here 
                })}
            </div>
            {/* board content ends here */}
        </div>
    )
}

export default Board;