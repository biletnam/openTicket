export const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER';
export const GET_APP_STATE = 'get_app_state';
export const LOGIN_SUCCESS = 'login_success';
export const ON_POST_FORM_CHANGE = 'on_form_post_change'
export const USER_SIGN_OUT = 'user_sign_out';
export const ON_REGISTER_FORM_CHANGED = 'register_form_changed';
export const POST_TICKET = 'post_ticket';
export const CLEAR_POST_TICKET_FORM = 'clear_post_ticket_form';
export const REGISTER_NEW_USER = 'register_new_user';
export const CLEAR_REG_FORM = 'clear_reg_form';

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

/**
 * 
 * @param {*} ticket 
 */
export const postTicket = (ticket) => {
    return {
        type: POST_TICKET,
        payload: ticket
    }
};

/**
 * 
 * @param {*} ticket 
 */
export const clearPostTicketForm = () => {
    return {
        type: CLEAR_POST_TICKET_FORM,
    }
};

/**
 * 
 * @param {*} user 
 */
export const registerNewUser = (user) => {
    return {
        type: REGISTER_NEW_USER,
        payload: user
    }
};

export const clearRegistrationForm = () => {
    return {
        type: CLEAR_REG_FORM
    }
};