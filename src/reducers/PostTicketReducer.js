import { ON_POST_FORM_CHANGE } from '../actions';

const INITIAL_STATE = {
    date: formattedDate(),
    from: '',
    to: '',
    price: '',
    time: '00:00'
};

/**
 * 
 */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ON_POST_FORM_CHANGE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
}

/**
 * 
 */
function formattedDate() {
    let d = new Date();
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${year}/${month}/${day}`;
}