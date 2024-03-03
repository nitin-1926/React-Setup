// sagas.ts
import { all, fork } from 'redux-saga/effects';
import { IUser } from './modules/Profile/types';
// import userSaga from './modules/Profile/saga';

// Redux state of the application
export type ApplicationState = {
	user: IUser;
};

export default function* rootSaga() {
	// yield all([fork(userSaga)]);
}
