import { GET_DATA_FROM_SERVER, GET_APP_STATE } from '../actions';

const INITIAL_STATE = {
    tickets: [{

        'from': 'Liverpool Central',
        'to': 'Manchester Airport',
        'time': '09:05',
        'date': '2017-08-21',
        'price': 1
    },
    {
        'from': 'Edge hill',
        'to': 'Liverpool Lime ST',
        'time': '13:30',
        'date': '2017-08-01',
        'price': 2
    },
    {
        'from': 'Liverpool Central',
        'to': 'Bryn',
        'time': '11:05',
        'date': '2017-09-21',
        'price': 3
    },
    {
        'from': 'Liverpool Central',
        'to': 'London st pancras intl.',
        'time': '12:11',
        'date': '2017-11-12',
        'price': 4
    },
    {
        'from': 'Liverpool Central',
        'to': 'Folkestone central',
        'time': '11:35',
        'date': '2017-12-12',
        'price': 5
    },
    {
        'from': 'Canterbury',
        'to': 'Luton',
        'time': '07:35',
        'date': '2018-01-2',
        'price': 6
    },
    {
        'from': 'London Waterloo',
        'to': 'Clapham Junction',
        'time': '08:35',
        'date': '2018-02-31',
        'price': 7
    },
    {
        'from': 'Kingston',
        'to': 'Reading',
        'time': '13:09',
        'date': '2017-11-18',
        'price': 8
    },
    {
        'from': 'Liverpool Central',
        'to': 'London st pancras intl.',
        'time': '13:35',
        'date': '2017-11-16',
        'price': 9
    },
    {
        'from': 'Liverpool Central',
        'to': 'Folkestone central',
        'time': '11:33',
        'date': '2017-12-19',
        'price': 10
    },
    {
        'from': 'Canterbury',
        'to': 'Luton',
        'time': '21:00',
        'date': '2018-01-27',
        'price': 11
    },
    {
        'from': 'London Waterloo',
        'to': 'Clapham Junction',
        'time': '04:21',
        'date': '2018-02-30',
        'price': 12
    },
    {
        'from': 'Kingston',
        'to': 'Reading',
        'time': '21:21',
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

