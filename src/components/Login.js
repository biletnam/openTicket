import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import { Card } from './Card.js';
import { CardSection } from './CardSection.js';
import { Button } from './Button.js';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            passwrod: ''
        };
    }

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Card style={{ backgroundColor: '#7bea7b', borderRadius: 10, padding: 0, margin: 0 }}>
                <Card style={{ backgroundColor: '#fff', borderRadius: 10, padding: 0, margin: 0 }}>
                    <FormLabel> <Text style={{ fontFamily: 'Chewy-Regular', color: '#0275d8' }}>Username</Text> </FormLabel>
                    <FormInput
                        placeholder='Enter your username'
                        onChangeText={() => { }}
                    />

                </Card>
                <Card style={{ backgroundColor: '#fff', borderRadius: 10, padding: 0, margin: 0 }}>
                    <FormLabel> <Text style={{ fontFamily: 'Chewy-Regular', color: '#0275d8' }}>Password</Text> </FormLabel>
                    <FormInput
                        secureTextEntry
                        placeholder='Enter your password'
                        onChangeText={() => { }}
                    />

                </Card>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                    <CardSection>
                        <Button
                            buttonStyle={{ padding: 10 }}
                            description='Login'
                            onPress={() => { }}
                        />
                    </CardSection>
                </View>

                <TouchableOpacity
                    style={styles.touchableHighlight}
                    onPress={() => { }}
                >
                    <Text
                        style={styles.textLink}>
                        {`New User? Register here.`}
                    </Text>
                </TouchableOpacity>

            </Card>
        );
    }
}

const styles = {
    textLink: {
        fontFamily: 'Chewy-Regular',
        textDecorationLine: 'underline',
        letterSpacing: 1,
        color: '#0275d8'
    },
    touchableHighlight: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
};

export default Login;