import React, { Component } from 'react';
import { Container, Header, Content, Icon, CardItem, Card, Body, Button } from 'native-base';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { getAppState } from '../actions';

class Home extends Component {

    componentWillMount() {
        this.props.getAppState();
    }

    btnpressed() {
        this.props.navigation.navigate('Login');
    }

    render() {
        console.log(this.props);
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <Container>

                <Body>
                    <Text> This is Home Page. </Text>
                    <Button Transparent onPress={this.btnpressed.bind(this)} >
                        <Text>To login page</Text>
                    </Button>
                </Body>


            </Container>
        );
    }
}

/**
 * 
 * @param {*} state 
 */
function mapStateToProps({ tickets }) {
    return {
        tickets
    };
}

/**
 * 
 */
export default connect(mapStateToProps, { getAppState })(Home);
