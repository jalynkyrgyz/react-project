const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

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
  // newMessageText: 'it-Kamasutra.com'  
  newMessageBody: "it"
}


const dialogsReducer = (state = initialState, action) => {
     
  switch (action.type) {
        case SEND_MESSAGE:
          let body = state.newMessageBody
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id:6, message:body}]
            
          }
          // let body = {id:6, message:state.newMessageBody }
        case UPDATE_NEW_MESSAGE_BODY: 
         return {
            ...state,
            newMessageBody: action.body
          }
        default:
            return state
    }
}

export const addMessageActionCreator = ()=> ({type: SEND_MESSAGE})
export const updateNewMessageActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body:body
  }
}

export default dialogsReducer