import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // stateReconciler: autoMergeLevel1,
    // blackList: ['selectedAppointment', 'auth'],
    whitelist: ['auth',],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

// store.subscribe(() => console.log('store =>', store.getState()));
store.subscribe(() => store.getState());

export const persistor = persistStore(store);
export default store;