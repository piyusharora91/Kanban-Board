const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase();
}

const capitalizeAndRemoveDash = (param) => {
    if (param.includes('-')) {
        return (param.split('-').map((val) => {
            return capitalizeWord(val) + val.slice(1);
        }
        )).join(' ');
    }
    return capitalizeWord(param) + param.slice(1);
}

const displayInitials = (name) => {
    if (name.includes(' ')) {
        const fullName = name.split(' ');
        const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        return initials
    }
    return capitalizeWord(name);

}

export {
    capitalizeAndRemoveDash,
    displayInitials
};