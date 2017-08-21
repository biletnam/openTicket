import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../components/Home.js';
import Purchased from '../components/Purchased.js';
import PostTicket from '../components/PostTicket.js';
import AboutUs from '../components/AboutUs.js';
import { Image, StyleSheet } from 'react-native';
import Login from '../components/Login.js';
import Register from '../components/Register.js';


export const homeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register User'
        }
    }
});


export const Tabs = TabNavigator({
    'Home': {
        screen: homeStack,
        navigationOptions: {
            login_tabBarIcon: {
                label: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./icons/home.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                )
            }
        }
    },
    'Post Ticket': {
        screen: PostTicket,
        navigationOptions: {
            postticket_tabBarIcon: {
                label: 'Post Ticket',
                icon: ({ tintColor }) => (
                    <Image
                        source={require('./icons/home.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                )
            }
        }
    },
    'Purchase': {
        screen: Purchased,
        navigationOptions: {
            login_tabBarIcon: {
                label: 'Purchased',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./icons/home.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                )
            }
        }
    },
    'About': {
        screen: AboutUs,
        navigationOptions: {
            aboutUs_tabBarIcon: {
                label: 'About Us',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./icons/home.png')}
                        style={[styles.icon, { tintColor }]}
                    />
                )
            }
        }
    },
},
    {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            upperCaseLabel: false,
            labelStyle: {
                padding: 5,
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

