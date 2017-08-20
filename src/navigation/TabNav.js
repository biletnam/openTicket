import { TabNavigator } from "react-navigation";
import Home from '../components/Home.js';
import Purchased from '../components/Purchased.js';
import PostTicket from '../components/PostTicket.js';
import AboutUs from '../components/AboutUs.js';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = TabNavigator({
    'Home': {
        screen: Home,
        navigationOptions: {
            login_tabBarIcon: {
                label: 'Login',
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('./icons/home.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
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
                icon: () => {
                    <Image
                        source={require('./icons/home.png')}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                }
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
                        style={[styles.icon, { tintColor: tintColor }]}
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
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                )
            }
        }
    },
},
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            labelStyle: {
                padding: 5,
                fontSize: 9
            }
        }
    }
);

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});


