import { combineReducers } from 'redux';

import GlassProductReducer from './glassproduct/GlassProductSlice';
import usersReducer from './users/usersSlice';
import postsReducer from './posts/postsSlice';
import ClothProductReducer from './clothproduct/ClothProductSlice'
import todosReducer from './todos/todosSlice'


const rootReducer = combineReducers({
  glassProduct: GlassProductReducer,
  users: usersReducer,
  posts: postsReducer,
  clothProduct: ClothProductReducer,
  todos: todosReducer
});

export default rootReducer;