import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Card } from './Card.js';
import { CardSection } from './CardSection.js';
import { Button } from './Button.js';
import { connect } from 'react-redux';
import { getAppState, loginSuccess } from '../actions';
import ReactTimeout from 'react-timeout';
import _ from 'lodash';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            invalid_username: null,
            invalid_password: null,
            login_failed: null
        };
    }

    /**
     * 
     */
    componentWillMount() {
        this.props.getAppState();
    }

    /**
     * 
     */
    registerPage() {
        this.props.navigation.navigate('Register');
    }

    /**
     * 
     */
    onLoginSubmit() {
        if (this.validateForm()) {
            let loggedin = false;
            _.map(this.props.users, (user) => {
                debugger;
                console.log('DB User', user);
                console.log('Form User', this.state.username + this.state.password);
                if (user.username === this.state.username && user.password === this.state.password) {
                    console.log(user);
                    loggedin = true;
                }
            });

            if (!loggedin) {
                this.setState({ login_failed: 'Login Failed. Please Try Again' });
                const that = this;
                setTimeout(() => {
                    that.setState({ login_failed: null });
                }, 2000);
            }
        }
    }

    /**
     * 
     */
    validateForm() {
        let valid = true;
        if (this.state.password.length < 1) {
            this.setState({ invalid_password: 'Invalid Password length.' });
            const that = this;
            setTimeout(() => {
                that.setState({ invalid_password: null });
            }, 2000);

            valid = false;
        }
        if (this.state.username.length < 1) {
            this.setState({ invalid_username: 'Invalid username length.' });
            const that = this;
            setTimeout(() => {
                that.setState({ invalid_username: null });
            }, 2000);
            valid = false;
        }
        return valid;
    }

    render() {
        const user_invalid = this.state.invalid_username ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.invalid_username}</Text></FormValidationMessage> : null;
        const pass_invalid = this.state.invalid_password ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.invalid_password}</Text></FormValidationMessage> : null;
        const login_failed = this.state.login_failed ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.login_failed}</Text></FormValidationMessage> : null;
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Card style={{ backgroundColor: '#d1d1e0', borderRadius: 10, padding: 10, marginLeft: 20, marginRight: 20 }}>
                <FormLabel> <Text style={styles.textStyle}> Username</Text> </FormLabel>
                <Card style={{ backgroundColor: '#fff', borderRadius: 10, padding: 0, margin: 0 }}>
                    <FormInput
                        placeholder='Enter your username'
                        onChangeText={username => this.setState({ username })}
                        value={this.state.username}
                    />
                    {user_invalid}
                </Card>
                <FormLabel> <Text style={styles.textStyle}>Password</Text> </FormLabel>
                <Card style={{ backgroundColor: '#fff', borderRadius: 10, padding: 0, margin: 0 }}>
                    <FormInput
                        secureTextEntry
                        placeholder='Enter your password'
                        onChangeText={password => this.setState({ password })}
                        value={this.state.passwrod}
                    />
                    {pass_invalid}
                </Card>
                {login_failed}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                    <CardSection>
                        <Button
                            buttonStyle={{ padding: 8 }}
                            description='Login'
                            onPress={this.onLoginSubmit.bind(this)}
                        />
                    </CardSection>
                </View>

                <TouchableOpacity
                    style={styles.touchableHighlight}
                    onPress={this.registerPage.bind(this)}
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
    },
    textStyle: {
        fontFamily: 'Chewy-Regular',
        alignSelf: 'center'
    }
};

/**
 * 
 */
function mapStateToProps({ users }) {
    return {
        users
    };
}

export default connect(mapStateToProps, { getAppState, loginSuccess })(ReactTimeout(Login));