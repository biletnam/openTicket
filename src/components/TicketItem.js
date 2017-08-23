import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from './Button.js';
import { Card } from './Card.js';
import { Icon } from 'react-native-elements';

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

    }

    /**
     * 
     */
    render() {
        const { buyButton, loginButton, loginTextStyle, buyTextStyle } = styles;
        const { item } = this.props.ticket;
        const btn = this.props.buy ? <Button description="Buy" buttonStyle={buyButton} textStyle={buyTextStyle} onPress={this.buyBtnClicked.bind(this)} /> :
            this.props.myTickets ? null :
                (<Button description="Login/Register to Buy" buttonStyle={loginButton} textStyle={loginTextStyle} onPress={this.loginBtnClicked.bind(this)}>
                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        size={26}
                    /></Button>);
        return (
            <Card>
                <View style={{ flexDirection: 'column', borderColor: '#ddd' }}>
                    <Text style={{ fontFamily: 'Chewy-Regular', alignSelf: 'flex-start' }}>{`
                        Date: ${item.date}
                        Source Station: ${item.from}
                        Destination Station: ${item.to}
                        Service: ${item.service}
                        Price: £ ${item.price}
                        `}</Text>
                </View>
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
    },
    loginTextStyle: {
        color: '#fff',
        margin: 5,
        fontFamily: 'Chewy-Regular'
    }
};

export default TicketItem;