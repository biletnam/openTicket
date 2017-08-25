import React, { Component } from 'react';
import { Container, Header, Content, Icon, CardItem, Card, Body, Button } from 'native-base';
import { Text, View } from 'react-native';
import Login from './Login.js';
import { connect } from 'react-redux';
import { getAppState } from '../actions';
import { LoginPrompt } from './labels/LoginPrompt.js';

class PostTicket extends Component {

    render() {
        console.log('Post Ticket', this.props);
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        if (!this.props.users.loggedin) {
            return (
                <View>
                    <LoginPrompt />
                    <Login
                        navigation={this.props.navigation}
                    />
                </View>
            );
        }

        return (
            <View><Text> Logged in user</Text></View>
        );
    }
}

/**
 * 
 */
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps, { getAppState })(PostTicket);
