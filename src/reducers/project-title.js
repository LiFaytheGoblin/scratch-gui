const SET_PROJECT_TITLE = 'projectTitle/SET_PROJECT_TITLE';

const projectTitleInitialState = {
    projectTitle: 'Untitled-1'
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = projectTitleInitialState;
    switch (action.type) {
    case SET_PROJECT_TITLE:
        return Object.assign({}, state, {
            projectTitle: action.title
        });
    default:
        return state;
    }
};
const setProjectTitle = title => ({
    type: SET_PROJECT_TITLE,
    title: title
});

export {
    reducer as default,
    projectTitleInitialState,
    setProjectTitle
};
