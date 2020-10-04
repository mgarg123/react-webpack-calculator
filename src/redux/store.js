import { createStore } from 'redux'
import calcReducer from './reducer/calcReducer.js'

const store = createStore(calcReducer)

export default store