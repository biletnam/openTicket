import React, { Component } from 'react';
import { Container } from 'native-base';
import { Tabs } from '../navigation/TabNav.js';

class Index extends Component {

    render() {
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Container>
                <Tabs />
            </Container>
        );
    }
}

export default Index;
