import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer'



const Dialogs = (props) => {

 let state = props.store.getState().dialogsPage

  let dialogsElements = state.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  })  
  
  let messagesElements =  state.messages.map((message)=> {
    return <Messages message={message.message} id={message.id} />
  })
  
  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator())
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageActionCreator(body))
  }



  



  return (
    <div className={styles.dialogs}>
       <div className={styles.dialogsItems}> 
        {dialogsElements}  
       </div>
       <div className={styles.messages}> 
        <div>{messagesElements}</div>  
        <div>          
           <div>
            <textarea value={newMessageBody}
                      onChange = {onNewMessageChange}
                      placeholder = "Enter your message"/>
          </div>          
          <div>
            <button onClick={onSendMessageClick}>Send Message</button>
          </div>  
        </div>          
       </div>    
    </div>
  )
}

export default Dialogs