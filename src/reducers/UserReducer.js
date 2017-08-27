import { GET_DATA_FROM_SERVER, LOGIN_SUCCESS, GET_APP_STATE } from '../actions';

const INITIAL_STATE = {
    allusers: [
        {
            'firstname': 'Fernando',
            'surname': 'Alonso',
            'username': 'faone',
            'password': '1one',
            'ticket_purchased': [
                {
                    'from': 'Canterbury',
                    'to': 'Luton',
                    'time': '13:35',
                    'date': '2018-01-7',
                    'price': 23
                },
                {
                    'from': 'Reading',
                    'to': 'Clapham Junction',
                    'time': '11:35',
                    'date': '2018-02-23',
                    'price': 12
                },
                {
                    'from': 'Kings Cross',
                    'to': 'London Luton',
                    'time': '09:35',
                    'date': '2017-12-20',
                    'price': 7
                }
            ]
        },
        {
            'firstname': 'Max',
            'surname': 'Verstappen',
            'username': 'mvtwo',
            'password': '2two',
            'ticket_purchased': [
                {
                    'from': 'Canterbury',
                    'to': 'Luton',
                    'time': '17:35',
                    'date': '2018-01-2',
                    'price': 15
                },
                {
                    'from': 'London Waterloo',
                    'to': 'Clapham Junction',
                    'time': '19:35',
                    'date': '2018-03-30',
                    'price': 17
                },
                {
                    'from': 'Kingston',
                    'to': 'Reading',
                    'time': '21:39',
                    'date': '2017-11-3',
                    'price': 5
                }
            ]
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
            return { ...state, ['users']: INITIAL_STATE.allusers, 'currentUser': INITIAL_STATE.currentUser };
        case LOGIN_SUCCESS:
            return { ...state, ['currentUser']: { loggedin: true, user: action.payload } };
        case GET_APP_STATE:
            return state;
        default:
            return state;
    }
}