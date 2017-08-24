import React from 'react';
import { Text } from 'react-native';
import { Card } from '../Card.js';

export const LoginPrompt = () => (
    <Card style={styles.cardStyle}>
        <Text style={styles.textStyle}>Please Login or Register to use this feature.</Text>
    </Card>
);

const styles = {
    cardStyle: {
        margin: 20,
        padding: 20
    },
    textStyle: {
        fontFamily: 'Chewy-Regular',
        color: '#d9534f'
    }
};