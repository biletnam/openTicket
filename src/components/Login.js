import React, { Component } from 'react';
import { Container, Header, Content, Icon, CardItem, Card, Body, Button } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getAppState } from '../actions';


class Login extends Component {

    componentWillMount() {
        this.props.getAppState();
        console.log('Login componentWillMount');
    }


    componentDidUpdate() {
        console.log("Login componentDidUpdate");
        console.log(this.props);
    }

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

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
};

export default connect(mapStateToProps, { getAppState })(Login);