import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Login from './Login.js';
import { connect } from 'react-redux';
import { getAppState, onPostFormChange } from '../actions';
import { LoginPrompt } from './labels/LoginPrompt.js';
import { Card } from './Card.js';
import styles from '../../styles.js';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button } from './Button.js';
import { CardSection } from './CardSection.js';
import ReactTimeout from 'react-timeout';
import DatePicker from 'react-native-datepicker';




class PostTicket extends Component {

    /**
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            userLoggedin: this.props.users.currentUser.loggedin,
            error_departure: null,
            error_destination: null,
            error_date: null,
            error_time: null,
            error_price: null,
        };

    }

    /**
     * 
     */
    componentWillReceiveProps(nextProps) {
        console.log('Post Ticket nextprops: ', nextProps);
        this.setState({
            userLoggedin: nextProps.users.currentUser.loggedin
        });
    }

    /**
     * 
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
        if (!this.props.from) {
            validForm = false;
            this.displayErrorMsg('error_from', 'Please provide the departure station.');
        }
        if (!this.props.to) {
            validForm = false;
            this.displayErrorMsg('error_to', 'Please provide the destination station.');
        }
        if (!this.props.date) {
            validForm = false;
            this.displayErrorMsg('error_date', 'Please provide the date of departure.');
        }
        if (!this.props.price) {
            validForm = false;
            this.displayErrorMsg('error_price', 'Please provide the price for the ticket.');

        }
        if (!this.props.time) {
            validForm = false;
            this.displayErrorMsg('error_time', 'Please provide the time of departure.');
        }
        return validForm;
    }

    postFormSubmit() {
        if (this.formIsValid()) {
            console.log('Post Form is Valid!!');
        }
    }

    /**
     * 
     */
    render() {
        console.log('Post Ticket', this.props);
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        if (!this.state.userLoggedin) {
            return (
                <View>
                    <LoginPrompt />
                    <Login
                        navigation={this.props.navigation}
                    />
                </View>
            );
        }

        const error_from = this.state.error_from ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.error_from}</Text></FormValidationMessage> : null;
        const error_to = this.state.error_to ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.error_to}</Text></FormValidationMessage> : null;
        const error_date = this.state.error_date ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.error_date}</Text></FormValidationMessage> : null;
        const error_time = this.state.error_time ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.error_time}</Text></FormValidationMessage> : null;
        const error_price = this.state.error_price ? <FormValidationMessage><Text style={styles.textStyle}>{this.state.error_price}</Text></FormValidationMessage> : null;


        return (
            <ScrollView
                contentContainerStyle={styles.scrollViewStyle}
            >
                <FormLabel> <Text style={styles.formLabelTextStyle}> Departure Station </Text> </FormLabel>
                <Card style={styles.cardFormInputStyle}>
                    <FormInput
                        onChangeText={(value) => this.props.onPostFormChange({ prop: 'from', value })}
                        value={this.props.from}
                    />
                    {error_from}
                </Card>

                <FormLabel> <Text style={styles.formLabelTextStyle}> Destination Station </Text> </FormLabel>
                <Card style={styles.cardFormInputStyle}>
                    <FormInput
                        onChangeText={(value) => this.props.onPostFormChange({ prop: 'to', value })}
                        value={this.props.to}
                    />
                    {error_to}
                </Card>

                <FormLabel> <Text style={styles.formLabelTextStyle}> Date </Text> </FormLabel>

                <View style={styles.dateTimeView}>
                    <DatePicker
                        style={{ flex: 1, paddingTop: 10 }}
                        mode="date"
                        date={this.props.date}
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                marginLeft: 4,
                                borderRadius: 10,
                                marginBottom: 5,
                                backgroundColor: '#fff'
                            }
                        }}
                        onDateChange={(value) => this.props.onPostFormChange({ prop: 'date', value })}

                    />
                </View>
                {error_date}

                <FormLabel> <Text style={styles.formLabelTextStyle}> Time </Text> </FormLabel>
                <View style={styles.dateTimeView}>                
                    <DatePicker
                        style={{ flex: 1, paddingTop: 10 }}
                        mode="time"
                        format="HH:mm"
                        date={this.props.time}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                marginLeft: 4,
                                borderRadius: 10,
                                marginBottom: 5,
                                backgroundColor: '#fff'
                            }
                        }}
                        onDateChange={(value) => this.props.onPostFormChange({ prop: 'time', value })}

                    />
                </View>
                {error_time}

                <FormLabel> <Text style={styles.formLabelTextStyle}> Price </Text> </FormLabel>
                <Card style={styles.cardFormInputStyle}>
                    <FormInput
                        onChangeText={(value) => this.props.onPostFormChange({ prop: 'price', value })}
                        value={this.props.price}
                    />
                    {error_price}
                </Card>

                <CardSection style={{ marginTop: 10, alignSelf: 'center' }}>
                    <Button
                        description='Post Ticket'
                        onPress={this.postFormSubmit.bind(this)}
                        buttonStyle={{ padding: 8, marginTop: 10 }}
                    />
                </CardSection>
            </ScrollView>
        );
    }
}

/**
 * 
 */
function mapStateToProps(state) {
    const { from, to, date, time, price } = state.postTicket;
    return {
        users: state.users,
        from, to, date, time, price
    };
}

export default connect(mapStateToProps, { getAppState, onPostFormChange })(ReactTimeout(PostTicket));
