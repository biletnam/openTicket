export const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER';
export const GET_APP_STATE = 'get_app_state';
export const LOGIN_SUCCESS = 'login_success';

/**
 * 
 */
export const getDataFromServer = () => {
    return {
        type: GET_DATA_FROM_SERVER
    };
};

/**
 * 
 */
export const populateUsers = () => {
    return {
        type: GET_DATA_FROM_SERVER
    };
};

/**
 * 
 */
export function getAppState() {
    return {
        type: GET_APP_STATE
    };
}

export function navToPostTicket(navigation) {
    navigation.navigate('Post Ticket');
    return { type: null };
}

/**
 * 
 */
export function loginSuccess(user, navigation) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
}