import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../components/Home.js';
import Purchased from '../components/Purchased.js';
import PostTicket from '../components/PostTicket.js';
import AboutUs from '../components/AboutUs.js';
import { Image, StyleSheet, Text } from 'react-native';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import React from 'react';
import { Header } from 'react-native-elements';
import AuthLabel from '../components/labels/AuthLabel.js';


export const homeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerRight: <AuthLabel />            
        }
    },
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title
        })
    },
    Register: {
        screen: Register,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title
        })
    }
});

export const postTicket = StackNavigator({
    'Post Ticket': {
        screen: PostTicket,
        navigationOptions: {
            title: 'Post Ticket',
            headerRight: <AuthLabel />
        }
    }
});

export const purchase = StackNavigator({
    'My Purchase': {
        screen: Purchased,
        navigationOptions: {
            title: 'My Purchase',
            headerRight: <AuthLabel />
        }
    }
});

export const aboutUs = StackNavigator({
    'About Us': {
        screen: AboutUs,
        navigationOptions: {
            title: 'About Us',
            headerRight: <AuthLabel />

        }
    }
});


export const Tabs = TabNavigator({
    'Home': {
        screen: homeStack,
        navigationOptions: {
            tabBarVisible: true,
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ width: 20, height: 20, tintColor }}
                    source={require('./icons/home.png')}
                />
            )
        }
    },
    'Post Ticket': {
        screen: postTicket,
        navigationOptions: {
            tabBarLabel: 'Post Ticket',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ width: 20, height: 20, tintColor }}
                    source={require('./icons/post-ticket.png')}
                />
            )
        }
    },
    'Purchase': {
        screen: purchase,
        navigationOptions: {
            tabBarLabel: 'My Purchase',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ width: 20, height: 20, tintColor }}
                    source={require('./icons/purchases.png')}
                />
            )
        }
    },
    'About Us': {
        screen: aboutUs,
        navigationOptions: {
            tabBarLabel: 'About Us',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    style={{ width: 20, height: 20, tintColor }}
                    source={require('./icons/about-us.png')}
                />
            )
        }
    }
},
    {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            labelStyle: {
                paddingBottom: 5,
                fontWeight: '900',
                fontSize: 9
            }
        },
        style: {
            backgroundColor: '#0275d8'
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

