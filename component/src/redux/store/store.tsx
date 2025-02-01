import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// reducers
const allReducers = {

};


const store = configureStore({
  reducer: combineReducers(allReducers)
});

export const updateReducers = (newReducers: Record<string, any>) => {
  const updatedReducers = combineReducers({ ...allReducers, ...newReducers });
  store.replaceReducer(updatedReducers);
};

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

