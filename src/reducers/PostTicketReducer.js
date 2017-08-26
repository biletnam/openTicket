import { ON_POST_FORM_CHANGE } from '../actions';

const INITIAL_STATE = {
    date: '',
    from: '',
    to: '',
    price: '',
    time: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ON_POST_FORM_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
}