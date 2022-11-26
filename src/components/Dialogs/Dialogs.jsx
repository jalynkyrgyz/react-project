import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'



const Dialogs = (props) => {
 
  let dialogsElements = props.dialogsState.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  })  
  
  let messagesElements =  props.dialogsState.messages.map((message)=> {
    return <Messages message={message.message} id={message.id} />
  })

  let newMessage = React.createRef()

  let addMessage = () => {
    // let messageText = newMessage.current.value 
    // props.addMessage()
    props.dispatch({type: 'ADD-MESSAGE'})
    // props.updateNewMessage('')
  }

  let onMessageChange = ()=> {
    let messageText = newMessage.current.value
    // props.updateNewMessage(messageText)
    props.dispatch({type: 'UPDATE-NEW-MESSAGE', newMessage:messageText })
  }

  return (
    <div className={styles.dialogs}>
       <div className={styles.dialogsItems}> 
        {dialogsElements}  
       </div>
       <div className={styles.messages}> 
        {messagesElements}
       </div>
       <div>
        <textarea
         onChange={onMessageChange}
         ref={newMessage}
         value = {props.dialogsState.newMessageText} />

        <button onClick={addMessage}>Add Message</button>
       </div>
       
    </div>
  )
}

export default Dialogs