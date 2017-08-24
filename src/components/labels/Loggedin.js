import React from 'react';
import { Text, View } from 'react-native';
import { Card } from '../Card.js';

export const Loggedin = ({ username }) => (
    <Card style={styles.cardStyle}>
        <Text style={styles.textStyle}>{`Logged in as: ${username}`}</Text>
    </Card>
);

const styles = {
    cardStyle: {
    },
    textStyle: {
        fontFamily: 'Chewy-Regular',
        color: '#7bea7b'

    }
};