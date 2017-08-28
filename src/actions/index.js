export const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER';
export const GET_APP_STATE = 'get_app_state';
export const LOGIN_SUCCESS = 'login_success';
export const ON_POST_FORM_CHANGE = 'on_form_post_change'
export const USER_SIGN_OUT = 'user_sign_out';
export const ON_REGISTER_FORM_CHANGED = 'register_form_changed';

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
    console.log('action creator loginSuccess', navigation);
    navigation.goBack();
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
}

/**
 * 
 * @param {*} value 
 */
export function onPostFormChange(value) {
    return {
        type: ON_POST_FORM_CHANGE,
        payload: value
    }
}

/**
 * 
 * @param {*} value 
 */
export function onRegisterFormChanged(value) {
    return {
        type: ON_REGISTER_FORM_CHANGED,
        payload: value
    }
}

/**
 * 
 */
export const userSignOut = () => {
    return {
        type: USER_SIGN_OUT
    }
};