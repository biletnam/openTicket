import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from './Card';
import { Button } from './Button.js';
import { FormLabel, FormInput } from 'react-native-elements';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    registerUser() {

    }

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <ScrollView style={{ backgroundColor: '#e6ccb3', borderRadius: 10, padding: 10, margin: 20 }}>
                <Card><Text style={{ fontFamily: 'Chewy-Regular', fontSize: 28, alignSelf: 'center' }}> {`Registration Form`}</Text></Card>

                <FormLabel> <Text style={styles.textStyle}>First Name</Text> </FormLabel>
                <Card style={styles.cardStyle}>
                    <FormInput
                        placeholder='Enter your first name'
                        onChangeText={() => { }}
                    />
                </Card>

                <FormLabel> <Text style={styles.textStyle}>Surname</Text> </FormLabel>
                <Card style={styles.cardStyle}>
                    <FormInput
                        placeholder='Enter your surname'
                        onChangeText={() => { }}
                    />
                </Card>

                <FormLabel> <Text style={styles.textStyle}>Username</Text> </FormLabel>
                <Card style={styles.cardStyle}>
                    <FormInput
                        placeholder='Please pick a username'
                        onChangeText={() => { }}
                    />
                </Card>


                <FormLabel> <Text style={styles.textStyle}>Password</Text> </FormLabel>
                <Card style={{ backgroundColor: '#fff', borderRadius: 10, padding: 0, margin: 0 }}>
                    <FormInput
                        secureTextEntry
                        placeholder='Enter your password'
                        onChangeText={() => { }}
                    />

                </Card>

                <FormLabel> <Text style={styles.textStyle}>Confirm Password</Text> </FormLabel>
                <Card style={styles.cardStyle}>
                    <FormInput
                        secureTextEntry
                        placeholder='Re-enter password'
                        onChangeText={() => { }}
                    />

                </Card>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>

                    <Button
                        buttonStyle={{ padding: 10 }}
                        description='Register User'
                        onPress={this.registerUser()}
                    />

                </View>

            </ScrollView>
        );
    }
}

const styles = {
    textStyle: {
        fontFamily: 'Chewy-Regular',
        marginTop: 10
    },
    cardStyle: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 0,
        margin: 0
    }
};

export default Register;