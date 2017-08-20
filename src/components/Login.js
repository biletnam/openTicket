import React, { Component } from 'react';
import { Container, Header, Content, Icon, CardItem, Card, Body, Button } from 'native-base';
import { Text, StyleSheet } from 'react-native';


class Login extends Component {

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Container>
                <Body>
                    <Text> This is a Login Form. </Text>
                </Body>
            </Container>
        );
    }
}

export default Login;
