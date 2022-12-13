import React from 'react'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer'
import StoreContext from '../../storeContext'
import Dialogs from './Dialogs'



const DialogsContainer = (props) => {

  

  return <StoreContext.Consumer> 
    {
      (store) => {
        let state = store.getState().dialogsPage

        let onSendMessageClick = () => {
          store.dispatch(addMessageActionCreator())
        }
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageActionCreator(body))
        }
        return (
          <Dialogs updateNewMessageBody = {onNewMessageChange}
                  sendMessage = {onSendMessageClick}
                  dialogsPage = {state} />
        )
      }    
    }    
  </StoreContext.Consumer> 
  
} 

export default DialogsContainer