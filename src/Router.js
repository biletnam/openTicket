import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SplashScreen from './components/';
import AboutUs from './components/AboutUs.js';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="splash">
                    <Scene key="splashScreen" component={SplashScreen} hideNavBar={true} />
                </Scene>

                <Scene key="home">
                    <Scene key="about" component={AboutUs} title="About Us" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;