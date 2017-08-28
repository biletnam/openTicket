import { ON_REGISTER_FORM_CHANGED, CLEAR_REG_FORM } from '../actions';

const INITIAL_STATE = {
    firstname: '',
    surname: '',
    username: '',
    password: '',
    confirmPassword: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_REGISTER_FORM_CHANGED:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CLEAR_REG_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}