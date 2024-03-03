import { createAction } from '@reduxjs/toolkit';
import { IUserActionTypes, Theme } from './types';

export const setTheme = createAction<{ theme: Theme }>(IUserActionTypes.SET_THEME);
