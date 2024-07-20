import {configureStore} from '@reduxjs/toolkit';
import counter from '../feature/counter/counter';

export default configureStore({
  reducer: counter.reducer,
})
