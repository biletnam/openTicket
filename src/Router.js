import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SplashScreen from './components/SplashScreen.js';
import Index from './components/Index.js';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="splash">
                    <Scene key="splashScreen" component={SplashScreen} hideNavBar />
                </Scene>

                <Scene key="index">
                    <Scene key="main" component={Index} hideNavBar />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;