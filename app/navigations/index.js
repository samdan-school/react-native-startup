import * as React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {AUTH_STACK_ROOT, MAIN_STACK_ROOT} from '../constants/ navigation';

const Stack = createStackNavigator();

{
  /* <Stack.Screen name="Details" component={DetailsScreen} />
<Stack.Screen name="Home" component={HomeScreen} /> */
}

const Navigation = () => {
  const isAuthenticated = false;

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen name={MAIN_STACK_ROOT} component={MainStack} />
      ) : (
        <Stack.Screen name={AUTH_STACK_ROOT} component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
