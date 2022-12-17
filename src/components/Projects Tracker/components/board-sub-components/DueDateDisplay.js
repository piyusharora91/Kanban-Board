import { boardDetailswithProjectsList } from '../../../../custom-files/records.js';

const DueDateDisplay = ({ boardSection, project }) => {
    return (
        <div className="project-due-date-container">
            <i className="fa-regular fa-calendar"></i>
            <h1>
                Due Date: <span>{boardDetailswithProjectsList[boardSection]
                [project].dueDate}</span>
            </h1>
        </div>
    );
}

export default DueDateDisplay;