import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../components/Home.js';
import Purchased from '../components/Purchased.js';
import PostTicket from '../components/PostTicket.js';
import AboutUs from '../components/AboutUs.js';
import { Image, StyleSheet, Text } from 'react-native';
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import { Icon } from 'native-base';


export const homeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            backgroundColor: 'grey'
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Home'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Login'
        }
    }
});

export const postTicket = StackNavigator({
    'Post Ticket': {
        screen: PostTicket,
        navigationOptions: {
            title: 'Post Ticket'
        }
    }
});

export const purchase = StackNavigator({
    'My Purchase': {
        screen: Purchased,
        navigationOptions: {
            title: 'Purchase'
        }
    }
});

export const aboutUs = StackNavigator({
    'About Us': {
        screen: AboutUs,
        navigationOptions: {
            title: 'About Us'
        }
    }
});


export const Tabs = TabNavigator({
    'Home': {
        screen: homeStack,
        navigationOptions: {
            login_tabBar: {
                tabBarVisible: true,
                label: ({ tintColor, focused }) => (<Text style={{ fontFamily: 'Chewy-Regular', tintColor, focused }}>Home</Text>),
                tabBarIcon: () => (
                    <Icon size={20} name='home' color={'red'} />
                )
            }
        }
    },
    'Post Ticket': {
        screen: postTicket,
        navigationOptions: {
            postticket_tabBar: {
                tabBarVisible: true,
                renderIcon: ({ tintColor }) => (
                    <Image
                        style={{ width: 20, height: 20, tintColor }}
                        source={require('./icons/home.png')}
                    />
                )
            }
        }
    },
    'Purchase': {
        screen: purchase,
        navigationOptions: {
            login_tabBar: {
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
        screen: aboutUs,
        navigationOptions: {
            aboutUs_tabBar: {
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
            showLabel: true,
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

