import React, { Component } from 'react';
import { Container, Header, Content, Icon, CardItem, Card, Body, Button } from 'native-base';
import { Text } from 'react-native';
// import { connect } from 'react-redux';


class Login extends Component {

    goToPostTicket() {
        this.props.navigation.navigate('Register');
    }

    render() {
        console.log('login props');
        console.log(this.props);
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Container>
                <Body>
                    <Text> This is a Login Form. </Text>
                    <Button
                        onPress={this.goToPostTicket.bind(this)}
                        iconLeft light>
                        <Icon name='home' />
                        <Text> Post Ticket </Text>
                    </Button>
                </Body>
            </Container>
        );
    }
}

export default Login;
