

const INITIAL_STATE = {
    allusers: [],
    currentUser: {
        loggedin: false
    }
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}