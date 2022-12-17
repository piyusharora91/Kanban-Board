import { boardDetailswithProjectsList } from '../../../../custom-files/records.js';

const TimeAndPriorityDisplay = ({ boardSection, project }) => {
    return (
        <div className='time-and-priority-container'>
            <div className="time-elapsed-container">
                <i className="fa-regular fa-clock"></i>
                <h2 className='time-elapsed-value'>
                    {boardDetailswithProjectsList[boardSection][project]
                        .timeElapsed}
                </h2>
            </div>
            <div className="priority-container">
                {(boardDetailswithProjectsList[boardSection][project]
                    .priority === 'high') ?
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className='priority-value' viewBox="0 0 24 24"
                        id='high'>
                        <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className='priority-value' viewBox="0 0 24 24"
                        id='low'>
                        <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                    </svg>
                }
            </div>
        </div>
    );
}

export default TimeAndPriorityDisplay;