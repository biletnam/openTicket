import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SplashScreen from './components/SplashScreen.js';
import AboutUs from './components/AboutUs.js';
import Login from './components/Login.js';
import PostTicket from './components/PostTicket.js';
import MainScreenNavigator from './navigation/TabNav.js';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="splash">
                    <Scene key="splashScreen" component={SplashScreen} />
                </Scene>

                <Scene key="home">
                    <Scene key="about" component={AboutUs} title="About Us" />
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="post-ticket" component={PostTicket} title="Post Ticket" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;