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

  let addNewMessage = () => {
    let messageText = newMessage.current.value 
    alert(messageText)
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
        <textarea ref={newMessage}></textarea>
        <button onClick={addNewMessage}>Add Message</button>
       </div>
       
    </div>
  )
}

export default Dialogs