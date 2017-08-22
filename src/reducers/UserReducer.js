import _ from 'lodash';
import { GET_DATA_FROM_SERVER } from '../actions';

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
export default function (state = null, action) {
    switch (action.type) {
        case GET_DATA_FROM_SERVER:
            const users = _.mapKeys(INITIAL_STATE.allusers, 'username');
            return { ...state, ['users']: users };
        default:
            return state;
    }
}