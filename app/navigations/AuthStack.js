import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin} from '../scenes';
import {SIGNIN} from '../constants/ navigation';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SIGNIN} component={Signin} />
    </Stack.Navigator>
  );
};

export default AuthStack;
