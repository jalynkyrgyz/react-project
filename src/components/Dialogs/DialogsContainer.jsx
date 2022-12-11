import React from 'react'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'



const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator())
  }
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageActionCreator(body))
  }

  return (
   <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick} dialogsPage = {state} />
  )
} 

export default DialogsContainer