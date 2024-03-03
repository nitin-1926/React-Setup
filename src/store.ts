import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { userInitialState } from './modules/Profile/reducers';
import rootReducer from './reducer';
import rootSaga, { ApplicationState } from './saga';

// Application initial state
export const initialState: ApplicationState = {
	user: userInitialState,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
