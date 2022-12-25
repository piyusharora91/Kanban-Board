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

    const onDragStart = (e, projectToMove) => {
        const targetFromSectionArray = e.target.parentElement.id.split('-');
        targetFromSectionArray.pop();
        const targetFromSection = targetFromSectionArray.join('-');
        e.dataTransfer.setData('targetFromSection', targetFromSection);
        e.dataTransfer.setData('targetProjectToMove', projectToMove);
        const targetHtmlElement = document.getElementById(`${projectToMove}-container`);
        setTimeout(() => {
            targetHtmlElement.classList.add('hide-project');
        }, 0);
    }

    const onDragLeave = (e) => {
        e.preventDefault();
        e.target.classList.remove('hide-project');
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const dropOnSectionBoard = (e, toMoveInSection) => {
        const targetFromSection = e.dataTransfer.getData('targetFromSection');
        const targetToMove = e.dataTransfer.getData('targetProjectToMove');
        boardDetailswithProjectsList[toMoveInSection][targetToMove] = boardDetailswithProjectsList[targetFromSection][targetToMove];
        delete boardDetailswithProjectsList[targetFromSection][targetToMove];
        const project = document.getElementById(`${targetToMove}-container`);
        const targetBoardSection = document.getElementById(`${toMoveInSection}-section`);
        targetBoardSection.appendChild(project);
        project.classList.remove('hide-project');
    }

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
                    return <BoardSectionDisplay boardSection={boardSection} key={boardSection} onDragStart={onDragStart}
                        onDragLeave={onDragLeave} onDragOver={onDragOver} dropOnSectionBoard={dropOnSectionBoard} />
                    // board section ends here 
                })}
            </div>
            {/* board content ends here */}
        </div>
    )
}

export default Board;