import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import chatReducer from './reducers/chatReducer'

const rootReducer = combineReducers({
    chatReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store