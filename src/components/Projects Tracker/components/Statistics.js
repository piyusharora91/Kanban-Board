import React from 'react';
import '../../../styles/css/ProjectsTracker.css';
import { capitalizeAndRemoveDash } from '../../../custom-files/textCasingConversions.js';

const statElementsValues = {
    'total-time-on-project': {
        'icon': 'fa-solid fa-briefcase',
        'value': '03:39',
        'value-metric': 'h',
    },
    'earnings': {
        'icon': 'fa-solid fa-comments-dollar',
        'value': '2409.20',
        'value-metric': '$',
    },
    'cost': {
        'icon': 'fa-solid fa-wallet',
        'value': '1260.14',
        'value-metric': '$',
    },
    'productivity': {
        'icon': 'fa-solid fa-chart-line',
        'value': '93.57',
        'value-metric': '%',
        'productivity-status': 'fa-solid fa-caret-up',
        'productivity-level': '2.37%'
    },
};

const Statistics = () => {
    return (
        <div className="stat-container-main">
            {Object.keys(statElementsValues).map((key) => {
                return (
                    <div className="stat-card" id={`${key}-card`} key={key}>
                        {/* statistics card title starts here */}
                        <div className="card-header">
                            <p>{capitalizeAndRemoveDash(key)}</p>
                            <i className={`${statElementsValues[key]['icon']} stat-card-icon`} id={`${statElementsValues[key]}-icon`}></i>
                        </div>
                        {/* statistics card title ends here */}

                        {/* statistics card values section starts here with all the elements placing and conditionals */}
                        {(key !== 'productivity') ?
                            <div className="card-value">
                                {(statElementsValues[key]['value-metric'] === '$') ?
                                    <h1><span>{statElementsValues[key]['value-metric']}</span>{statElementsValues[key]['value']}</h1>
                                    :
                                    <h1>{statElementsValues[key]['value']}<span>{statElementsValues[key]['value-metric']}</span></h1>
                                }
                            </div>
                            :
                            <div className="card-value">
                                <div className="productivity-value-container">
                                    <h1>{statElementsValues[key]['value']}<span>{statElementsValues[key]['value-metric']}</span></h1>
                                </div>
                                <div className="productivity-level-container">
                                    <i className={statElementsValues[key]['productivity-status']}></i>
                                    <p>{statElementsValues[key]['productivity-level']}</p>
                                </div>
                            </div>
                        }
                        {/* statistics card values section ends here */}
                    </div>
                );
            })}
        </div>
    )
}

export default Statistics;