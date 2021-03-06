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
            loggedin: false,
            currentUser: {},
            date: new Date(),
            tickets_main: this.props.tickets,
            tickets_copy: this.props.tickets
        };
    }

    /**
     * 
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            loggedin: nextProps.currentUser.loggedin,
            currentUser: nextProps.currentUser.user,
            tickets_copy: nextProps.tickets,
            tickets_main: nextProps.tickets
        });
    }

    /**
     * 
     */
    loginComponent() {
        this.props.screenProps.navigate('Login', { title: 'Login' });
    }

    /**
     * 
     */
    registerComponent() {
        this.props.screenProps.navigate('Register', { title: 'Registration' });
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

        const background = this.state.loggedin ? '#0275d8' : '#d9534f';
        return (
            <View>
                <View style={{ backgroundColor: `${background}` }}>
                    <Text style={{ color: '#fff', fontFamily: 'Chewy-Regular', alignSelf: 'center' }}>{`${this.state.tickets_copy.length} tickets found!`}</Text>
                </View>
                <View style={{ marginBottom: 280 }}>
                    <FlatList
                        loggedin={this.state.loggedin}
                        data={this.state.tickets_copy}
                        keyExtractor={ticket => ticket.date}
                        renderItem={(ticket) => (
                            <TicketItem
                                ticket={ticket}
                                loggedin={this.state.loggedin}
                                loginPage={this.loginComponent.bind(this)}
                                myTickets={this.props.myTickets}
                            />
                        )}
                    />
                </View>

            </View>
        );
    }

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <View>
                <CardSection style={{ backgroundColor: '#d1d1e0', position: 'relative' }}>
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