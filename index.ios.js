import { AppRegistry } from 'react-native';

import App from './src/';
/**
 * supress warning for the long timeout that firebase apparently uses
 */
console.ignoredYellowBox = ['Setting a timer'];
AppRegistry.registerComponent('openTicket', () => App);
