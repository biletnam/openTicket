import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { Card } from './Card.js';
import { CardSection } from './CardSection.js';
import { Button } from './Button.js';
import { connect } from 'react-redux';
import TicketItem from './TicketItem.js';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import DatePickerForm from './DatePicker.js';
import DatePicker from 'react-native-datepicker';
import { Input, Form } from 'native-base';
import Moment from 'moment';




class TicketList extends Component {

    /**
     * 
     */
    constructor(props) {
        super(props);
        this.state = {
            tickets_main: this.props.tickets,
            tickets_copy: this.props.tickets
        };
    }

    /**
     * 
     */
    componentWillMount() {
        console.log('componentWillMount');
        this.createDataSource(this.state.tickets_copy);
    }

    /**
     * 
     */
    createDataSource({ tickets }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(tickets);
        console.log('this.dataSource', this.dataSource);
    }

    /**
     * 
     */
    filterTickets(date) {
        let filtered_data = [];
        _.map(this.state.tickets_main, ticket => {
            if (ticket.date < date.filter_date) {
                return [...filtered_data, filtered_data[ticket.date] = ticket];
            }
        });

        if (filtered_data !== undefined) {
            console.log(filtered_data);
        }

        const filtered_tickets = _.mapKeys(filtered_data, "date");
        this.setState({
            tickets_copy: filtered_tickets
        });

    }


    /**
     * 
     */
    renderTickets() {
        if (this.state.tickets_copy === null || Object.keys(this.state.tickets_copy) < 1) {
            return (
                <CardSection style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', color: '#d9534f' }}>
                        No Data available in the record!!!
                </Text>
                </CardSection>
            )
        }
        console.log('renderTickets datasource', this.dataSource);
        return _.map(this.state.tickets_copy, ticket => {
            return (
                <View key={ticket.date}>
                    <Text>
                        Some Text
                    </Text>
                </View>
            );
        });
    }

    dateChanged(date) {
        console.log('datechanged', date);
    }

    render() {
        const { handleSubmit } = this.props;
        console.log('field props?? ', this.props);

        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Card>
                <CardSection>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center' }}> Display Until:</Text>

                    <DatePicker
                        style={{ flex: 1 }}
                        mode="date"
                        date='23-08-2017'
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                marginLeft: 5
                            }
                        }}
                        onDateChange={(date) => { console.log('changed date', date) }}

                    />

                    <Button
                        description='Filter'
                        onPress={handleSubmit(this.filterTickets.bind(this))} />
                </CardSection>

                <CardSection>
                    {this.renderTickets()}
                </CardSection>

            </Card>
        );
    }

    /**
     * 
     * @param {*} field 
     */
    renderDateField(field) {
        return (
            <DatePickerForm
            />
        )
    }
}

function validateForm(fields) {
    const errors = {};
    //validate the inputs from 'values'
    //if errors is empty the form is valid
    if (!fields.filter_date) {
        //the title property for the errors object directly links with the name property of the field
        errors.filter_date = "Please provide the filter date!";
    }
    return errors;
}

/**
 *
 */
export default reduxForm({
    validate: validateForm,
    form: 'RegisterForm'
})(TicketList);