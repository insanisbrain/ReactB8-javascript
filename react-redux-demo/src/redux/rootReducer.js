import { combineReducers } from 'redux';

import GlassProductReducer from './glassproduct/GlassProductReducer';
import EyeProductReducer from './eyewearproduct/EyeProductReducer';


const rootReducer = combineReducers({
  glassProduct: GlassProductReducer,
  eyeProduct: EyeProductReducer
});

export default rootReducer;