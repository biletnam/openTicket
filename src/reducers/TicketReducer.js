import { FETCH_TICKETS } from '../actions';

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
        default:
            return state;
    } 
}

