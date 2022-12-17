import React from 'react';
import logo from '../../assets/logo.png';
import '../../styles/css/NavBar.css';
import { capitalizeAndRemoveDash } from '../../custom-files/textCasingConversions';

const navLinksDetails = {
    'dashboard': 'fa-sharp fa-solid fa-table-columns',
    'real-time-tracking': 'fa-solid fa-clock',
    'screenshots': 'fa-solid fa-camera',
    'employees': 'fa-sharp fa-solid fa-people-group',
    'project-tracking': 'fa-solid fa-briefcase',
    'teams': 'fa-solid fa-people-line',
    'time-and-attendance': 'fa-regular fa-calendar',
    'apps-and-websites': 'fa-solid fa-tv',
    'settings': 'fa-sharp fa-solid fa-gear',
};

const NavBar = () => {
    return (
        <div className='main-nav-container' id="main-nav-container">
            <div className="logo-container">
                <img src={logo} alt="" id="logo" />
            </div>
            <div className="nav-links-container">
                {Object.keys(navLinksDetails).map((key, index) => {
                    return (
                        <div key={index}>
                            <div className="nav-links" id={`${key}-nav-link-container`}>
                                <i className={`${navLinksDetails[key]} nav-link-icon`} id={`${key}-icon`}></i>
                                <span className="nav-link-text">{capitalizeAndRemoveDash(key)}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="user-container">
                <img src="https://images.generated.photos/kSga-QlvLQ-Vj0LKFjczuohY19r8HrlMLDIDjzH5GAg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwNDgxLmpwZw.jpg"
                    alt="user-profile-through-which-platform-is-getting-accessed" id="user-image" />
                <span id="user-name">Maria Jones</span>
            </div>
        </div>
    )
}

export default NavBar;