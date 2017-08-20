import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//Redux thunk is a middleware
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';
// import LoginForm from './components/LoginForm';


class App extends Component {

    /**
     * 
     */
    componentWillMount() {
        
    }

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;
