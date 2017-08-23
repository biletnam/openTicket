import { GET_DATA_FROM_SERVER } from '../actions';

const INITIAL_STATE = {
    allusers: [
        {
            'firstname': 'Fernando',
            'surname': 'Alonso',
            'username': 'faone',
            'password': '1one',
            'ticket_purchased': []
        },
        {
            'firstname': 'Max',
            'surname': 'Verstappen',
            'username': 'mvtwo',
            'password': '2two',
            'ticket_purchased': []
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
export default function (state = null, action) {
    switch (action.type) {
        case GET_DATA_FROM_SERVER:
            return { ...state, ['users']: INITIAL_STATE.allusers, 'current user': INITIAL_STATE.currentUser };
        default:
            return state;
    }
}