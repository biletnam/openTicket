import { NavigationActions } from 'react-navigation';
import { Tabs } from '../navigation/TabNav.js';

const initialState = Tabs.router.getStateForAction(NavigationActions.init() || true);

export default function (state = initialState, action) {
    const nextState = Tabs.router.getStateForAction(action, state);

    //simply return the original `state` if `nextState` is null or undefined
    return nextState || state;
}