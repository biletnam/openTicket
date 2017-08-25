import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button.js';
import { Card } from './Card.js';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class TicketItem extends Component {

    /**
     * 
     */
    buyBtnClicked() {

    }

    /**
     * 
     */
    loginBtnClicked() {
        this.props.loginPage();
    }

    /**
     * 
     */
    render() {
        const { buyButton, loginButton, loginTextStyle, buyTextStyle } = styles;
        const { item } = this.props.ticket;
        console.log('buy button', this.props.buy);
        const btn = this.props.currentUser.loggedin ? <Button description="Buy" buttonStyle={buyButton} textStyle={buyTextStyle} onPress={this.buyBtnClicked.bind(this)} /> :
            this.props.myTickets ? null :
                (<Button description="Login/Register to Buy" buttonStyle={loginButton} textStyle={loginTextStyle} onPress={this.loginBtnClicked.bind(this)}>
                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        size={26}
                    /></Button>);
        return (
            <Card style={{ marginLeft: 15, marginRight: 15, backgroundColor: '#d1d1e0' }}>
                <Text style={{ fontFamily: 'Chewy-Regular', alignSelf: 'flex-start' }}>{`
                        Date: ${item.date}
                        Source Station: ${item.from}
                        Destination Station: ${item.to}
                        Service: ${item.service}
                        Price: £ ${item.price}
                        `}</Text>
                {btn}
            </Card>
        );
    }
}

const styles = {
    buyButton: {
        flex: 1,
        backgroundColor: '#0275d8',
        borderColor: '#fff',
        padding: 8
    },
    buyTextStyle: {
        color: '#fff',
        margin: 5,
        fontFamily: 'Chewy-Regular'
    },
    loginButton: {
        flex: 1,
        backgroundColor: '#d9534f',
        borderColor: '#fff',
        padding: 8
    },
    loginTextStyle: {
        color: '#fff',
        margin: 5,
        fontFamily: 'Chewy-Regular'
    }
};

function mapStateToProps(state) {
    return { currentUser: state.users.currentUser };
}

export default connect(mapStateToProps)(TicketItem);