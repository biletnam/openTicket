export const FETCH_TICKETS = 'fetch_tickets';
export const GET_APP_STATE = 'get_app_state';

/**
 * 
 */
export const populateTickets = () => {
    return {
        type: FETCH_TICKETS
    };
};

/**
 * 
 */
export const populateUsers = () => {
    return {
        type: FETCH_TICKETS
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