import {combineReducers} from '@reduxjs/toolkit';

import counterSlice from './todosSlice';

export default combineReducers({
  counter: counterSlice,
});
