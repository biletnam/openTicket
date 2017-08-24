import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getAppState, navToPostTicket } from '../actions';
import TicketList from './TicketList.js';

class Home extends Component {

    /**
     * 
     */
    loginComponent() {
        this.props.navigation.navigate('Login');
    }

    /**
     * 
     */
    registerComponent() {
        this.props.navigation.navigate('Register');
    }

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <View>
                <TicketList
                    screenProps={this.props.navigation}
                    tickets={this.props.tickets}
                    buy={false}
                    loginPage={this.loginComponent.bind(this)}
                    registerPage={this.registerComponent.bind(this)}
                />
            </View>
        );
    }
}

/**
 *
 * @param {*} state
 */
function mapStateToProps({ tickets, users }) {
    return {
        tickets,
        users
    };
}

/**
 *
 */
export default connect(mapStateToProps, { getAppState, navToPostTicket })(Home);
