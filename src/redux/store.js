import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

// import { rerenderEntireTree } from "../render"

let store = {
  _state: {
    profilesPage: {
        posts: [
            {id:1, message: 'Hi, how are you?', likesCount: 12},
            {id:2, message: 'Tt\'s my first post!!!', likesCount: 11},
        ],
        newPostText: 'it-lamasutra.com'
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"},
        ],
    
        messages: [
            {id:1, message: "Hi"},
            {id:2, message: "How is your Kamasutra"},
            {id:3, message: "Yohey"},
            {id:4, message: "Yohe"},
            {id:5, message: "Yo"},
          ],
        // newMessageText: 'it-Kamasutra.com'
        newMessageBody: ''
    },
    sidebar: {}  
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState(){
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },
  
  dispatch(action){     
    this._state.profilesPage =  profileReducer(this._state.profilesPage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  }
} 
export default store

window.store = store

