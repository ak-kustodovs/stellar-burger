import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { constructorReducer } from './slices/constructorSlice';
import { ordersReducer } from './slices/ordersSlice';
import { userReducer } from './slices/userSlice';
import { newOrderReducer } from './slices/newOrderSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  orders: ordersReducer,
  user: userReducer,
  newOrder: newOrderReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
