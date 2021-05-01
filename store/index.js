import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { user } from './user'
// import { users } from './users'

export const Reducers = combineReducers({
    userState: user,
    // usersState: users
})

export const store = createStore(Reducers, applyMiddleware(thunk))

