import { combineReducers } from 'redux';
import radar from './radar';
import health from './health';

const reducer = combineReducers({
  radar,
  health,
});

export default reducer;
