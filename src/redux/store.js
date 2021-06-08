import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import phonebookReducer from './actions/phonebook-reducer';
import authReducer from './auth/auth-reducer';

import { 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';



const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
  }),
  logger];


const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: phonebookReducer,
    },
    middleware, 
    devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;