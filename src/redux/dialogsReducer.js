const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
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


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:6,
                message:state.newMessageText
              }
              state.messages.push(newMessage)
              state.newMessageText = ''
              return state
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = ()=> ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (messageText) => {
  return {
    type: UPDATE_NEW_MESSAGE, newMessage:messageText
  }
}

export default dialogsReducer