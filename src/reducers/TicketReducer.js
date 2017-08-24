import { GET_DATA_FROM_SERVER, GET_APP_STATE } from '../actions';

const INITIAL_STATE = {
    tickets: [{

        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'service': 'Northern Railways',
        'date': '2017-08-21',
        'price': 1
    },
    {
        'from': 'Edge hill',
        'to': 'Liverpool Lime ST',
        'service': 'Northern Railways',
        'date': '2017-08-01',
        'price': 2
    },
    {
        'from': 'Liverpool Central',
        'to': 'Bryn',
        'service': 'Northern Railways',
        'date': '2017-09-21',
        'price': 3
    },
    {
        'from': 'Liverpool Central',
        'to': 'London st pancras intl.',
        'service': 'Northern Railways',
        'date': '2017-11-12',
        'price': 4
    },
    {
        'from': 'Liverpool Central',
        'to': 'Folkestone central',
        'service': 'Northern Railways',
        'date': '2017-12-12',
        'price': 5
    },
    {
        'from': 'Canterbury',
        'to': 'Luton',
        'service': 'Northern Railways',
        'date': '2018-01-2',
        'price': 6
    },
    {
        'from': 'London Waterloo',
        'to': 'Clapham Junction',
        'service': 'Northern Railways',
        'date': '2018-02-31',
        'price': 7
    },
    {
        'from': 'Kingston',
        'to': 'Reading',
        'service': 'Northern Railways',
        'date': '2017-11-18',
        'price': 8
    },
    {
        'from': 'Liverpool Central',
        'to': 'London st pancras intl.',
        'service': 'Northern Railways',
        'date': '2017-11-16',
        'price': 9
    },
    {
        'from': 'Liverpool Central',
        'to': 'Folkestone central',
        'service': 'Northern Railways',
        'date': '2017-12-19',
        'price': 10
    },
    {
        'from': 'Canterbury',
        'to': 'Luton',
        'service': 'Northern Railways',
        'date': '2018-01-27',
        'price': 11
    },
    {
        'from': 'London Waterloo',
        'to': 'Clapham Junction',
        'service': 'Northern Railways',
        'date': '2018-02-30',
        'price': 12
    },
    {
        'from': 'Kingston',
        'to': 'Reading',
        'service': 'Northern Railways',
        'date': '2017-11-20',
        'price': 13
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
        case GET_DATA_FROM_SERVER:
            return { ...state, ['tickets']: INITIAL_STATE.tickets, ['splashData']: true };
        case GET_APP_STATE:
            return state;
        default:
            return state;
    }
}

