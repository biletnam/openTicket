

const INITIAL_STATE = {
    allusers: [
        {
            'firstname': 'Fernando',
            'surname': 'Alonso',
            'username': 'one',
            'password': '1one'
        },
        {
            'firstname': 'Max',
            'surname': 'Verstappen',
            'username': 'two',
            'password': '2two'
        }
    ],

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