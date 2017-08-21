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
        'to': 'Bryn',
        'service': 'Northern Railways',
        'date': 'sep 21, 2017',
        'price': 30
    },
    {
        'from': 'Liverpool Central',
        'to': 'London st pancras international',
        'service': 'Northern Railways',
        'date': 'nov 2, 2017',
        'price': 33
    },
    {
        'from': 'Liverpool Central',
        'to': 'Folkestone central',
        'service': 'Northern Railways',
        'date': 'dec 12, 2017',
        'price': 22
    },
    {
        'from': 'Canterbury',
        'to': 'Luton',
        'service': 'Northern Railways',
        'date': 'jan 3, 2018',
        'price': 5
    },
    {
        'from': 'London Waterloo',
        'to': 'Clapham Junction',
        'service': 'Northern Railways',
        'date': 'feb 3, 2018',
        'price': 3
    },
    {
        'from': 'Kingston',
        'to': 'Reading',
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
export default function (state = null, action) {
    switch (action.type) {
        case FETCH_TICKETS:
            const mappedTickets = _.mapKeys(INITIAL_STATE.tickets, 'date');
            return { ...state, ['tickets']: mappedTickets, ['splashData']: true };
        case GET_APP_STATE:
            return state;
        default:
            return state;
    }
}

