import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from './Button.js';
import { Card } from './Card.js';
import { Confirm } from './Confirm.js';

class TicketItem extends Component {

    /**
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            loggedin: this.props.loggedin,
            showModal: false,
            ticket: this.props.ticket.item
        };
    }

    /**
     * Note that React may call this method even if the props have not changed, so make sure to compare the current * and next values if you only want to handle changes. This may occur when the parent component causes your
     * component to re-render.
  
     * React doesn't call componentWillReceiveProps with initial props during mounting. It only calls this method if * some of component's props may update. Calling this.setState generally doesn't trigger 
     * componentWillReceiveProps.
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            loggedin: nextProps.loggedin
        });

    }

    /**
     * 
     */
    buyBtnClicked() {
        this.setState({ showModal: true });
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
    onAccept() {
        this.setState({ showModal: false });
    }

    /**
     * 
     */
    onDecline() {
        this.setState({ showModal: false });
    }

    /**
     * 
     */
    render() {
        const { buyButton, loginButton, loginTextStyle, buyTextStyle } = styles;
        const { item } = this.props.ticket;
        const btn = this.state.loggedin ? <Button description="Buy" buttonStyle={buyButton} textStyle={buyTextStyle} onPress={this.buyBtnClicked.bind(this)} /> :
            this.props.myTickets ? null :
                (<Button description="Login/Register to Buy" buttonStyle={loginButton} textStyle={loginTextStyle} onPress={this.loginBtnClicked.bind(this)} />
                );

        return (
            <Card style={{ marginLeft: 15, marginRight: 15, backgroundColor: '#d1d1e0' }}>
                <Text style={{ fontFamily: 'Chewy-Regular', alignSelf: 'flex-start' }}>{`
                        Date: ${item.date}
                        Departure: ${item.from}
                        Destination: ${item.to}
                        Time: ${item.time}
                        Price: £ ${item.price}
                        `}</Text>
                {btn}

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    <Text style={styles.loginTextStyle}>
                        Are you sure you want to purchase the ticket?
                    </Text>
                </Confirm>
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


export default TicketItem;