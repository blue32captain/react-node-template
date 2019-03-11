import { combineReducers } from 'redux'

const test = (s = {}, a) => ({ ...s, a })

export default combineReducers({
  test,
})
