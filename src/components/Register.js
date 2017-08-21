import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Register extends Component {

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <View>
                <Text> This is Register Page. </Text>
            </View>
        );
    }
}

export default Register;