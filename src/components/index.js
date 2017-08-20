import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { View, Image, Text } from 'react-native';
import styles from '../../styles.js';
import { populateTickets } from '../actions';
import { Actions } from 'react-native-router-flux';
import ReactTimeout from 'react-timeout';

class SplashScreen extends Component {

    /**
     * 
     */
    componentWillUnMount() {
        //this.props.populateTickets();
        //timer.clearTimeout(this);
    }

    /**
     * After the initial screen has been show to the user. Wait for certain amount of time
     * and then redirect the user to the home page. The time gained through this process is to be 
     * used to retrieve data from the server via asynchronous calls.
     */
    componentDidMount() {
        //console.log(this.props);
        this.props.setTimeout(() => {
            Actions.home();
        }, 800);
    }

    render() {
        console.log(this.props);
        /**
         * The second arguement for createStore function is any initial state that we want to pass to redux
         * store. The third arguement is the store enhancer.
         */
        return (
            <View
                style={{ flex: 1, backgroundColor: '#ffffff' }}
            >
                <View style={{ flex: .9, alignItems: 'center', justifyContent: 'center', }}>
                    <Image
                        style={{ width: 100, height: 100, opacity: 0.8 }}
                        source={require('../../assets/icon/openticket.png')}
                    />

                    <Text style={{ marginTop: 20, fontSize: 28, fontWeight: '900', color: '#000000' }}> OPEN TICKET </Text>
                </View>

                <View style={{ flex: .1, alignItems: 'center' }}>
                    <Text> Powered by React Native</Text>
                </View>

            </View>
        );
    }
}

/**
 * 
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    const { tickets } = state;
    return { tickets }
};

/**
 * React Timeout is a higher order component for React and React Native providing the wrapped component with safe versions of setTimeout, setInterval...
 * When the wrapped component is unmounted, any lingering timers will be canceled automatically.
 */
export default connect(mapStateToProps, { populateTickets })(
    ReactTimeout(SplashScreen));
