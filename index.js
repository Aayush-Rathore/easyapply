/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootProvider from './src/providers';

const Main = () => {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
