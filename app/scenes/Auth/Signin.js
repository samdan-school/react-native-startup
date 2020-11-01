import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {counterSelector, decrement, increment} from '../../redux/todosSlice';

function Signin() {
  const count = useSelector(counterSelector.getCounter);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => dispatch(increment())}
        style={styles.button}
        title={'Increment'}
      />
      <Button
        onPress={() => dispatch(decrement())}
        style={styles.button}
        title={'Decrement'}
      />
      <Text>current count = {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 16,
  },
});

export default Signin;
