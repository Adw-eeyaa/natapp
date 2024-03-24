import { AppRegistry } from 'react-native';
import App from './App';
import { registerRootComponent } from './expo';
import { name as natapp } from './app.json';

AppRegistry.registerComponent(natapp, () => App);
AppRegistry.runApplication(natapp, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),

});
