const randomColors = [
    '#FF6633', '#FF33FF', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#B34D4D', '#80B300', '#809900', '#6680B3',
    '#66991A', '#FF99E6', '#FF1A66', '#E6331A', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D',
    '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#4D8066', '#809980',
    '#999933', '#FF3380', '#CCCC00', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#6666FF'
];

const profileUsers = {
    'maria-jones': {
        'name': 'Maria Jones',
        'profilePic': 'https://images.generated.photos/kSga-QlvLQ-Vj0LKFjczuohY19r8HrlMLDIDjzH5GAg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQwNDgxLmpwZw.jpg',
    },
    'joe-geller': {
        'name': 'Joe Geller',
        'profilePic': 'https://images.generated.photos/HMnd1uFg0PQiNmnAAExkOAGMzhrbDqA1KEMWkbywCRo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5OTUzLmpwZw.jpg',
    },
    'adisa-duric': {
        'name': 'Adisa Duric',
        'profilePic': 'https://images.generated.photos/qJkbD1RcdmPpzHBUB8Xtm-XZpp6RjUMfkfvIQYJu9uE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzY3NTA3LmpwZw.jpg',
    },
    'amelia-eiger': {
        'name': 'Amelia Eiger',
        'profilePic': 'https://images.generated.photos/vXh97jjk8eIrd8d8t4Ei-SPSrQ7tVnh5uX0xc2iiQBw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTk3MDQzLmpwZw.jpg',
    },
    'ashley-riley': {
        'name': 'Ashley Riley',
        'profilePic': 'https://images.generated.photos/C9CJYLf3tmLoC3zdOAFai8DsPa8Xg_LQUybaC2RZls4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjMxNzEyLmpwZw.jpg',
    },
    'meenu-singh': {
        'name': 'Meenu Singh',
        'profilePic': '',
    },
    'jean-mario': {
        'name': 'Jean Mario',
        'profilePic': '',
    },
    'roghaye-safari': {
        'name': 'Roghaye Safari',
        'profilePic': ''
    }
};

const boardDetailswithProjectsList = {
    'to-do': {
        'design-homepage': {
            'users': [profileUsers['maria-jones'], profileUsers['joe-geller'], profileUsers['meenu-singh'], profileUsers['amelia-eiger'], profileUsers['jean-mario']],
            'timeElapsed': '00:00:00 h',
            'priority': 'high',
            'dueDate': ''
        },
        'change-old-app-icon': {
            'users': [profileUsers['roghaye-safari'], profileUsers['jean-mario']],
            'timeElapsed': '00:00:00 h',
            'priority': 'low',
            'dueDate': ''
        }
    },
    'on-hold': {
        'UI-styleguide': {
            'users': [profileUsers['jean-mario']],
            'timeElapsed': '12:24:49 h',
            'priority': 'high',
            'dueDate': ''
        },
        'new-look-of-calendar': {
            'users': [profileUsers['maria-jones'], profileUsers['amelia-eiger']],
            'timeElapsed': '21:32:54 h',
            'priority': 'high',
            'dueDate': '27 Jul'
        },
        'interactions-design': {
            'users': [profileUsers['maria-jones'], profileUsers['ashley-riley']],
            'timeElapsed': '14:29:23 h',
            'priority': 'low',
            'dueDate': ''
        }
    },
    'in-progress': {
        'dashboard': {
            'users': [profileUsers['joe-geller'], profileUsers['meenu-singh']],
            'timeElapsed': '16:29:23 h',
            'priority': 'high',
            'dueDate': ''
        },
        'usability-testing': {
            'users': [profileUsers['adisa-duric']],
            'timeElapsed': '12:24:48 h',
            'priority': 'high',
            'dueDate': ''
        },
        'animated-loader': {
            'users': [profileUsers['roghaye-safari']],
            'timeElapsed': '21:32:54 h',
            'priority': 'low',
            'dueDate': ''
        },
        'email-templates': {
            'users': [profileUsers['ashley-riley'], profileUsers['jean-mario']],
            'timeElapsed': '14:29:23 h',
            'priority': 'low',
            'dueDate': ''
        }
    },
    'done': {
        'design-system': {
            'users': [profileUsers['meenu-singh'], profileUsers['amelia-eiger'], profileUsers['joe-geller']],
            'timeElapsed': '35:44:11 h',
            'priority': 'high',
            'dueDate': ''
        },
        'user-research': {
            'users': [profileUsers['adisa-duric']],
            'timeElapsed': '28:02:51 h',
            'priority': 'high',
            'dueDate': ''
        }
    }
};

export {
    boardDetailswithProjectsList,
    profileUsers,
    randomColors
};