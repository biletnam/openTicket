import { combineReducers } from 'redux';
import TicketReducer from './TicketReducer.js';
import UserReducer from './UserReducer.js';
import NavReducer from './nav.js';
import { reducer as FormReducer } from 'redux-form';
import PostTicketReducer from './PostTicketReducer.js';

/**
 * combineReducers neatly gathers results from all the reducers
 * to a single state object. The shape of the state object matches the keys of 
 * the passed reducers. Any reducers passed to combinereducers must satisfy these rules:
 * 
 * 1. for any action unrecognised, it must return the default state passed as the parameter.
 * 2. Never return undefined or check if a state is undefined and return the default state.
 * 
 */
export default combineReducers({
    tickets: TicketReducer,
    users: UserReducer,
    nav: NavReducer,
    form: FormReducer,
    postTicket: PostTicketReducer
});