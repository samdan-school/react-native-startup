import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DETAIL, HOME} from '../constants/ navigation';

import {Detail, Home} from '../scenes';

const Stack = createStackNavigator();

const MainStack = () => {
  const isAuthenticated = false;

  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default MainStack;
