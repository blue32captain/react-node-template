import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

export const configureStore = (preLoadedState = {}) =>
  createStore(
    rootReducer,
    preLoadedState,
    composeWithDevTools(applyMiddleware())
  )
