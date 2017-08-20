import { TabNavigator } from "react-navigation";
import Login from '../components/Login.js';
import PostTicket from '../components/PostTicket.js';

export const Tabs = TabNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            login_tabBarIcon: {
                label: 'Login'
            }
        }
    },
    postticket: {
        screen: PostTicket,
        navigationOptions: {
            postticket_tabBarIcon: {
                label: 'Post Tickets'
            }
        }
    },
});

