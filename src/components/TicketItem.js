import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './CardSection';

class TicketItem extends Component {
    /**
     * 
     */
    render() {
        const { ticket } = this.props;

        return (
            <View>
                <CardSection>
                    <Text>{ticket.date}</Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default TicketItem;