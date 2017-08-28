import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getAppState, navToPostTicket } from '../actions';
import TicketList from './TicketList.js';

class Home extends Component {

    /**
     * 
     */
    componentWillMount() {
        this.props.getAppState();
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
                    tickets={this.props.tickets.tickets}
                    users={this.props.users}
                    myTickets={false}
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
