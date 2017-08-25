import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { CardSection } from './CardSection.js';
import TicketItem from './TicketItem.js';
import _ from 'lodash';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import { getAppState } from '../actions';

class TicketList extends Component {

    /**
     * 
     */
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            tickets_main: this.props.tickets.tickets,
            tickets_copy: this.props.tickets.tickets
        };
    }

    loginComponent() {
        this.props.screenProps.navigate('Login', { title: 'Home' });
    }

    /**
     * 
     */
    registerComponent() {
        this.props.screenProps.navigate('Register', { title: 'Login' });
    }

    /**
     * 
     */
    filterTickets(date) {
        const filtered_tickets = [];
        _.map(this.state.tickets_main, ticket => {
            if (ticket.date < date) {
                return filtered_tickets.push(ticket);
            }
        });

        this.setState({
            tickets_copy: filtered_tickets,
            date
        });
    }


    /**
     * 
     */
    renderTickets() {
        if (this.state.tickets_copy === null || this.state.tickets_copy.length < 1) {
            return (
                <CardSection style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', color: '#d9534f', fontFamily: 'Chewy-Regular' }}>
                        No Data available in the record!!!
                </Text>
                </CardSection>
            );
        }

        return (
            <View>
                <View style={{ backgroundColor: '#189a18', borderRadius: 4, marginBottom: 6, padding: 5 }}>
                    <Text style={{ color: '#fff', fontFamily: 'Chewy-Regular' }}>{`${this.state.tickets_copy.length} tickets found!`}</Text>
                </View>


                <FlatList
                    data={this.state.tickets_copy}
                    keyExtractor={ticket => ticket.date}
                    renderItem={(ticket) => (
                        <TicketItem
                            ticket={ticket}
                            buy={this.props.currentUser.loggedin}
                            loginPage={this.loginComponent.bind(this)}
                        />
                    )}
                />

            </View>
        );
    }

    render() {
        console.log('ticketlist', this.props);
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <View>
                <CardSection style={{ backgroundColor: '#d1d1e0' }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: 'Chewy-Regular' }}> Display Until:</Text>

                    <DatePicker
                        style={{ flex: 1, paddingTop: 10 }}
                        mode="date"
                        date={this.state.date}
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                marginLeft: 4,
                                borderRadius: 10,
                                marginBottom: 5,
                                backgroundColor: '#f6f6ee',
                                borderColor: '#f6f6ee',
                            }
                        }}
                        onDateChange={this.filterTickets.bind(this)}

                    />
                </CardSection>
                <View style={{ backgroundColor: '#fff' }}>
                    {this.renderTickets()}
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.users.currentUser
    };
}

/**
 *
 */
export default connect(mapStateToProps, { getAppState })(TicketList);