import { boardDetailswithProjectsList } from '../../../../custom-files/records.js';
import { displayInitials } from '../../../../custom-files/textCasingConversions.js';

let renderNumLeftUsersAssigned = false;

const ProjectAssigneeDisplay = ({ boardSection, project }) => {
    const userImageDisplay = (userProfile, project) => {
        if (userProfile.profilePic)
            return (
                <img src={userProfile.profilePic}
                    key={`${project}-project-${userProfile.name}-profile-pic`}
                    alt='' className='user-profile-image-display user-meta-info assignee-profile-image-card' />
            );
        return <p className='user-initials-display user-meta-info assignee-profile-image-card'
            key={`${project}-project-${userProfile.name}-profile-initials`}>
            {displayInitials(userProfile.name)}
        </p>
    }

    const renderRestUsersAssigned = (usersLeft) => {
        if (!renderNumLeftUsersAssigned) {
            renderNumLeftUsersAssigned = true;
            return (
                <p className='num-players-assigned-left-rendering assignee-profile-image-card'
                    key={`${usersLeft}-many-users-not-display-on-card`}>
                    <span>+</span>
                    {usersLeft}
                </p>
            );
        }
    }

    return (
        <div className="project-assignees" key={`${boardSection}-${project}-assignee-container`}>
            {
                (boardDetailswithProjectsList[boardSection][project].users)
                    .map((user, index) => {
                        if (index <= 2)
                            return userImageDisplay(user, project)
                        else {
                            return renderRestUsersAssigned(boardDetailswithProjectsList[boardSection][project].users.length - index)
                        }
                    })
            }
        </div>
    );
}

export default ProjectAssigneeDisplay;