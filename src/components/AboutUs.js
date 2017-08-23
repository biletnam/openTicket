import React, { Component } from 'react';
// import { Container, Header, Content, Icon, CardItem, Card, Body, Button } from 'native-base';
import { Text } from 'react-native';
import { CardSection } from './CardSection.js';
import { Card } from './Card';

class AboutUs extends Component {

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Card>
                <Text style={{ fontFamily: 'Chewy-Regular', fontSize: 30, textAlign: 'center', padding: 20, backgroundColor: 'transparent' }}> WE ARE NOVA</Text>
                <CardSection style={{ backgroundColor: '#7bea7b' }}>
                    <Text style={{ textAlign: 'left', fontFamily: 'Chewy-Regular' }}>{`
                        We Are Nova 
                        29-31 Parliament Street
                        Liverpool, L8 5RN
                        UK
                        Email: info@wearenova.co.uk
                        Phone: 01234354354
                    `}</Text>
                </CardSection>
            </Card >
        );
    }
}


export default AboutUs;
