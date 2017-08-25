import React, { Component } from 'react';
import { Container, Header, Content, Icon, CardItem, Card, Body, Button } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import Login from './Login.js';
import { LoginPrompt } from './labels/LoginPrompt.js';
import { connect } from 'react-redux';
import { getAppState } from '../actions';


class Purchased extends Component {

    render() {
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

function mapStateToProps(state) {
    return {
        appState: state.tickets,
        users: state.users
    };
}

export default connect(mapStateToProps, { getAppState })(Purchased);
