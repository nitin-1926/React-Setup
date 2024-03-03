import { createReducer } from '@reduxjs/toolkit';
import { setTheme } from './actions';
import { IUser } from './types';

export const IUserInitialState: IUser = {
	name: 'Nitin Gupta',
	email: 'gupta7nitin@gmail.com',
	preferences: {
		theme: 'light',
	},
};

const reducer = createReducer(IUserInitialState, builder => {
	return builder.addCase(setTheme, (state, action) => {
		const { theme: newTheme } = action.payload;
		state.preferences.theme = newTheme;
	});
});

export { IUserInitialState as userInitialState, reducer as userReducer };
