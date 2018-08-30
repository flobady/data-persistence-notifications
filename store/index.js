import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: hardSet,
  whitelist: ['info'] // only info will be persisted
}

const persistedReducer = persistReducer(persistConfig, reducers);
// const store = createStore(persistedReducer)
const store = createStore(
  persistedReducer,
  {}, // state par défaut de l'app
  compose(
    applyMiddleware(thunk)
  )
);
const persistor = persistStore(store)

export default  { store, persistor };






// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from '../reducers';

// const store = createStore(
//   reducers,
//   {}, // state par défaut de l'app
//   compose(
//     applyMiddleware(thunk)
//   )
// );

// export default store;
