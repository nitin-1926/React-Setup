export type Theme = 'light' | 'dark';

export type IUser = {
	name: string;
	email: string;
	preferences: {
		theme: Theme;
	};
};

export enum IUserActionTypes {
	SET_THEME = '@@user/SET_THEME',
}
