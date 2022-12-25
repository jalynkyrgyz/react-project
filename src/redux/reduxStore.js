import { legacy_createStore as createStore, combineReducers } from 'redux'

import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
    profilesPage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store