import { FETCH_TICKETS, GET_APP_STATE } from '../actions';

const INITIAL_STATE = {
    tickets: []
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TICKETS:
            return { ...state, ['splashData']: true };
        case GET_APP_STATE:
            console.log('Reducer returned state');
            return state;
        default:
            return state;
    }
}

