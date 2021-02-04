import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// slices
import someSlice from './slice-name'

const storeReducer = combineReducers({
  [someSlice.name]: someSlice.reducer,
})

const store = createStore(storeReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
