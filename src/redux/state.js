import { rerenderEntireTree } from "../render"

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

  export let addMessage = () => {
    let newMessage = {
        id:6,
        message:state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
  }

  export let addPost = () => {    
    let newPost = {
        id: 3,
        message: state.profilesPage.newPostText,
        likesCount: 0
    }
    state.profilesPage.posts.push(newPost)
    state.profilesPage.newPostText = ''
    rerenderEntireTree(state)
  }

  export let updateNewPostText = (newText) => {
    state.profilesPage.newPostText = newText
    rerenderEntireTree(state)
  }

  
  export let updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
  }

  export default state
  





