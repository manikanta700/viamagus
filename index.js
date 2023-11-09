/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TodayGamesScreen from './screens/screen1';
import ProfileScreen from './screens/screen3';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TodayGamesScreen);
// AppRegistry.registerComponent(appName, () => ProfileScreen);

