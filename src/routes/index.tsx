import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Game from '../pages';

const { Navigator, Screen } = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Game">
        <Screen
          name="Home"
          component={Game}
          options={() => ({
            header: () => undefined,
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
