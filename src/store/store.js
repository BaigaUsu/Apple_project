import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';

const lsKey = 'goods';
const lsValue = localStorage.getItem(lsKey);
const initialState = lsValue ? JSON.parse(lsValue) : {
    favorites: [],
};

export const store = configureStore({
    reducer,
    preloadedState: initialState,
});

store.subscribe(() => {
    localStorage.setItem(lsKey, JSON.stringify(store.getState()));
    });
