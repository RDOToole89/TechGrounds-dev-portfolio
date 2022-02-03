import { combineReducers } from 'redux';
import { reducer as repositoriesReducer } from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
