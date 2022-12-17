import React from 'react';
import { useState } from 'react';
import '../../../styles/css/ProjectsTracker.css';

const InlineEdit = ({ value, setValue }) => {
    const [editingValue, setEditingValue] = useState(value);
    const onChange = (event) => setEditingValue(event.target.value);

    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape") {
            event.target.blur();
        }
    }

    const onBlur = (event) => {
        if (event.target.value.trim() === "") {
            setValue(value);
            setEditingValue(value);
        } else {
            setValue(event.target.value)
        }
    }

    return (
        <input
            type="text"
            aria-label="Field name"
            value={editingValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            title="Click to Edit Page Heading"
            id="page-heading-editor"
        />
    )
}

const BasicInfo = () => {

    const [projectName, setProjectName] = useState('Design System');

    return (
        <div className="basic-info-container-main">
            <div className="general-info">
                <div className="page-direction">
                    <p>Projects <span>{'>'}</span><strong>{projectName}</strong></p>
                </div>
                <div className="page-title">
                    <InlineEdit value={projectName} setValue={setProjectName} />
                </div>
                <div className="meta-page-info">
                    <div className="meta-info-section" id="active-project">
                        <i className="fa-solid fa-star"></i>
                        <span><strong>Active Project</strong></span>
                    </div>
                    <div className="meta-info-section" id="num-assignees">
                        <i className="fa-solid fa-user"></i>
                        <span><strong>4</strong> Assignees</span>
                    </div>
                    <div className="meta-info-section" id="time-budget">
                        <i className="fa-solid fa-wallet"></i>
                        <span>Budget: <strong>32 hours</strong></span>
                    </div>
                </div>
            </div>
            <div className="time-info">
                <div className="notify-icon-container">
                    <i className="fa-solid fa-bell" id="notify-button"></i>
                </div>
                <div className="time-display-container">
                    <i className="fa-solid fa-calendar" id="calendar-icon"></i>
                    <div>
                        <p id="title">Total Time</p>
                        <p id="result">Calendar is not available</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo;