import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk';
import { persistReducer,persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
  let store = createStore(persistedReducer, 
    applyMiddleware(thunk));
  let persistor = persistStore(store)
  return { store, persistor }
};


// const store=createStore(rootReducer,applyMiddleware(thunk));

// export default store


