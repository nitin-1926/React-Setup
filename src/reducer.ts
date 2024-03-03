import { combineReducers } from 'redux';
import { userReducer } from './modules/Profile/reducers';

// Combine reducers
const rootReducer = combineReducers({
	user: userReducer,
});

export default rootReducer;
