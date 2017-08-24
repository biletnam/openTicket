import React, { Component } from 'react';
import { Container, Header, Content, Icon, CardItem, Card, Body, Button } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import Login from './Login.js';
import { LoginPrompt } from './labels/LoginPrompt.js';


class Purchased extends Component {

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
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

export default Purchased;
