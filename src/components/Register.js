import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from './Card';
import { Button } from './Button.js';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { onRegisterFormChanged } from '../actions';
import ReactTimeout from 'react-timeout';



class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname_error: '',
            surname_error: '',
            username_error: '',
            password_error: '',
            confirmPassword_error: '',
        };
    }

    /**
     * 
     */
    registerUser() {
        if (this.formIsValid()) {
            console.log('Proceed to register the user.');
        }
    }

    /**
     * 
     * @param {*} label 
     * @param {*} message 
     */
    displayErrorMsg(label, message) {
        this.setState({ [label]: [message] });
        const that = this;
        this.props.setTimeout(() => {
            that.setState({ [label]: null });
        }, 2000);
    }

    /**
     * 
     */
    formIsValid() {
        let validForm = true;
        console.log('From length inspect: ', this.props.from);
        if (!this.props.firstname) {
            validForm = false;
            this.displayErrorMsg('firstname_error', 'Please provide your firstname.');
        }
        if (!this.props.surname) {
            validForm = false;
            this.displayErrorMsg('surname_error', 'Please provide your surname.');
        }
        if (!this.props.username) {
            validForm = false;
            this.displayErrorMsg('username_error', 'Please provide your username.');
        }
        if (!this.props.password) {
            validForm = false;
            this.displayErrorMsg('password_error', 'Please provide a password.');

        }
        if (!this.props.confirmPassword) {
            validForm = false;
            this.displayErrorMsg('confirmPassword_error', 'Please confirm your password.');
        }

        if ((this.props.confirmPassword && this.props.password) && !(this.props.confirmPassword === this.props.password)) {
            validForm = false;
            this.displayErrorMsg('confirmPassword_error', 'Password do not match');
            this.displayErrorMsg('password_error', 'Password do not match');
        }

        return validForm;
    }

    render() {

        const error_firstname = this.state.firstname_error ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.firstname_error}</Text></FormValidationMessage> : null;
        const error_surname = this.state.surname_error ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.surname_error}</Text></FormValidationMessage> : null;
        const error_username = this.state.username_error ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.username_error}</Text></FormValidationMessage> : null;
        const error_password = this.state.password_error ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.password_error}</Text></FormValidationMessage> : null;
        const error_confirmPassword = this.state.confirmPassword_error ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.confirmPassword_error}</Text></FormValidationMessage> : null;

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
                        onChangeText={(value) => this.props.onRegisterFormChanged({ prop: 'firstname', value })}
                        value={this.props.firstname}
                    />
                    {error_firstname}
                </Card>

                <FormLabel> <Text style={styles.textStyle}>Surname</Text> </FormLabel>
                <Card style={styles.cardStyle}>
                    <FormInput
                        placeholder='Enter your surname'
                        onChangeText={(value) => this.props.onRegisterFormChanged({ prop: 'surname', value })}
                        value={this.props.surname}
                    />
                    {error_surname}
                </Card>

                <FormLabel> <Text style={styles.textStyle}>Username</Text> </FormLabel>
                <Card style={styles.cardStyle}>
                    <FormInput
                        placeholder='Please pick a username'
                        onChangeText={(value) => this.props.onRegisterFormChanged({ prop: 'username', value })}
                        value={this.props.username}
                    />
                    {error_username}
                </Card>


                <FormLabel> <Text style={styles.textStyle}>Password</Text> </FormLabel>
                <Card style={{ backgroundColor: '#fff', borderRadius: 10, padding: 0, margin: 0 }}>
                    <FormInput
                        secureTextEntry
                        placeholder='Enter your password'
                        onChangeText={(value) => this.props.onRegisterFormChanged({ prop: 'password', value })}
                        value={this.props.password}
                    />
                    {error_password}
                </Card>

                <FormLabel> <Text style={styles.textStyle}>Confirm Password</Text> </FormLabel>
                <Card style={styles.cardStyle}>
                    <FormInput
                        secureTextEntry
                        placeholder='Re-enter password'
                        onChangeText={(value) => this.props.onRegisterFormChanged({ prop: 'confirmPassword', value })}
                        value={this.props.confirmPassword}
                    />
                    {error_confirmPassword}
                </Card>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>

                    <Button
                        buttonStyle={{ padding: 10 }}
                        description='Register User'
                        onPress={this.registerUser.bind(this)}
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

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    const { firstname, surname, username, password, confirmPassword } = state.registerForm;
    return { firstname, surname, username, password, confirmPassword };
};

export default connect(mapStateToProps, { onRegisterFormChanged })(ReactTimeout(Register));