// import { setTheme } from './actions';
// import { put, takeLatest } from 'redux-saga/effects';
// import { Action } from '@reduxjs/toolkit';

// function* setThemeSaga(action: Action) {
// 	if (!setTheme.match(action)) {
// 		return;
// 	}

// 	const { theme } = action.payload;
// 	console.log('Theme in saga:', theme);
// 	yield put(setTheme({ theme }));
// }

// export default function* userSaga() {
// 	yield takeLatest(setTheme.type, setThemeSaga);
// }
