/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
