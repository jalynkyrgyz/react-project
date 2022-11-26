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
        newMessageText: 'it-Kamasutra.com'
    }    
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
  
  addMessage (){
    let newMessage = {
        id:6,
        message:this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._callSubscriber(this._state)
  },

 /*addPost () {    
    let newPost = {
        id: 3,
        message: this._state.profilesPage.newPostText,
        likesCount: 0
    }
    this._state.profilesPage.posts.push(newPost)
    this._state.profilesPage.newPostText = ''
    this._callSubscriber(this._state)
  },

  updateNewPostText (newText) {
    this._state.profilesPage.newPostText = newText
    this._callSubscriber(this._state)
  },
  
  updateNewMessage  (newMessage) {
    this._state.dialogsPage.newMessageText = newMessage
    this._callSubscriber(this._state)
  },*/

  dispatch(action){
    if (action.type === 'ADD-POST'){
      let newPost = {
        id: 3,
        message: this._state.profilesPage.newPostText,
        likesCount: 0
      }
      this._state.profilesPage.posts.push(newPost)
      this._state.profilesPage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilesPage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id:6,
        message:this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-MESSAGE') {
      this._state.dialogsPage.newMessageText = action.newMessage
      this._callSubscriber(this._state)
    }
  }

  

}
export default store

window.store = store


/*
let rerenderEntireTree = ()=> {
  console.log("State changed");
}

let state = {
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
        newMessageText: 'it-Kamasutra.com'
    }    
  }

 window.state = state

  export const addMessage = () => {
    let newMessage = {
        id:6,
        message:state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
  }

  export const addPost = () => {    
    let newPost = {
        id: 3,
        message: state.profilesPage.newPostText,
        likesCount: 0
    }
    state.profilesPage.posts.push(newPost)
    state.profilesPage.newPostText = ''
    rerenderEntireTree(state)
  }

  export const updateNewPostText = (newText) => {
    state.profilesPage.newPostText = newText
    rerenderEntireTree(state)
  }

  
  export const updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
  }
  export const subscribe = (observer) => {
    rerenderEntireTree = observer
  }

  export default state*/
  





