import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { SCREENS } from './constants/routes-name';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name={SCREENS.HOME} component={Home} />
  </Navigator>
);

export default Routes;