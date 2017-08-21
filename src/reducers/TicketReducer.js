import _ from 'lodash';
import { FETCH_TICKETS, GET_APP_STATE } from '../actions';

const INITIAL_STATE = {
    tickets: [{

        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'service': 'Northern Railways',
        'date': 'aug 21, 2017',
        'price': 10
    },
    {
        'from': 'Edge hill',
        'to': 'Liverpool Lime ST',
        'service': 'Northern Railways',
        'date': 'aug 1, 2017',
        'price': 30
    },
    {
        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'service': 'Northern Railways',
        'date': 'sep 21, 2017',
        'price': 30
    },
    {
        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'service': 'Northern Railways',
        'date': 'nov 2, 2017',
        'price': 33
    },
    {
        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'service': 'Northern Railways',
        'date': 'dec 12, 2017',
        'price': 22
    },
    {
        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'service': 'Northern Railways',
        'date': 'jan 3, 2018',
        'price': 5
    },
    {
        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'service': 'Northern Railways',
        'date': 'feb 3, 2018',
        'price': 3
    },
    {
        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'service': 'Northern Railways',
        'date': 'nov 22, 2017',
        'price': 6
    }
    ]
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_TICKETS:
            const mappedTickets = _.mapKeys(INITIAL_STATE.tickets, 'date');
            console.log(mappedTickets);
            return { ...state, ['splashData']: true };
        case GET_APP_STATE:
            console.log('Reducer returned state');
            return state;
        default:
            return state;
    }
}

