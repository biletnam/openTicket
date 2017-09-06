import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './Login.js';
import { LoginPrompt } from './labels/LoginPrompt.js';
import { connect } from 'react-redux';
import { getAppState } from '../actions';
import TicketList from './TicketList.js';


class Purchased extends Component {

    /**
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            tickets: []
        };
    }

    /**
     * 
     */
    componentWillReceiveProps(nextProps) {
        console.log('Purchased nexprops: ', nextProps);
        if (nextProps.users.currentUser.loggedin !== this.state.loggedin) {
            const { currentUser } = nextProps.users;
            let update_tickets = [];

            if (currentUser.user !== undefined) {
                update_tickets = currentUser.user.ticket_purchased;
            }
            console.log('Update_Tickets array = ', update_tickets);
            this.setState({
                loggedin: currentUser.loggedin,
                tickets: update_tickets
            });
        }
    }

    /**
     * 
     */
    render() {
        console.log('Purchased Component state => ', this.state);
        if (this.state.loggedin) {
            return (
                <TicketList
                    screenProps={this.props.navigation}
                    tickets={this.state.tickets}
                    users={this.props.users}
                    myTickets
                />
            );
        }
        console.log('Purchased props: ', this.props);
        return (
            <View>
                <LoginPrompt />
                <Login
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}

/**
 * 
 */
function mapStateToProps(state) {
    return {
        appState: state.tickets,
        users: state.users
    };
}

/**
 * 
 */
export default connect(mapStateToProps, { getAppState })(Purchased);
