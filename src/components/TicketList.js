import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { Card } from './Card.js';
import { CardSection } from './CardSection.js';
import TicketItem from './TicketItem.js';
import _ from 'lodash';
import { reduxForm, } from 'redux-form';
import DatePicker from 'react-native-datepicker';

class TicketList extends Component {

    /**
     * 
     */
    constructor(props) {
        super(props);
        this.state = {
            date: formattedDate(),
            tickets_main: this.props.tickets.tickets,
            tickets_copy: this.props.tickets.tickets
        };
    }

    /**
     * 
     */
    filterTickets(date) {
        console.log('new Date', date);
        const filtered_tickets = [];
        _.map(this.state.tickets_main, ticket => {
            if (ticket.date < date) {
                console.log('valid ticket');
                return filtered_tickets.push(ticket);
            }
        });

        if (filtered_tickets !== undefined) {
            console.log('filtered_tickets => ', filtered_tickets);
        }

        this.setState({
            tickets_copy: filtered_tickets,
            date
        });
    }


    /**
     * 
     */
    renderTickets() {
        if (this.state.tickets_copy === null || Object.keys(this.state.tickets_copy) < 1) {
            return (
                <CardSection style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', color: '#d9534f', fontFamily: 'Chewy-Regular' }}>
                        No Data available in the record!!!
                </Text>
                </CardSection>
            );
        }
        console.log('renderTickets ticket_copy', this.state.tickets_copy);

        return (
            <View style={{ alignSelf: 'flex-start', marginTop: 5, flexDirection: 'column' }}>
                <Card style={{ backgroundColor: '#7bea7b', borderRadius: 4, marginBottom: 6, padding: 5 }}>
                    <Text style={{ color: '#fff', fontFamily: 'Chewy-Regular' }}>{`${this.state.tickets_copy.length} tickets found!`}</Text></Card>
                <View style={{ flex: 1, position: 'relative', flexDirection: 'column' }}>
                    <FlatList
                        data={this.state.tickets_copy}
                        keyExtractor={ticket => ticket.date}
                        renderItem={(ticket) => (
                            <TicketItem ticket={ticket} buy={this.props.buy} loginPage={this.props.loginPage} />
                        )}
                    />
                </View>
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
                <CardSection>
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

/**
 * 
 */
function formattedDate(d = new Date()) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${year}-${month}-${day}`;
}


/**
 *
 */
export default TicketList;