import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state'



const Dialogs = (props) => {
  
  let dialogsElements = props.dialogsState.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  })  
  
  let messagesElements =  props.dialogsState.messages.map((message)=> {
    return <Messages message={message.message} id={message.id} />
  })

  
  // let newMessageBody = props.state.newMessageBody

  let newMessage = React.createRef()
  let addMessage = () => {
    // let messageText = newMessage.current.value 
    // props.addMessage()
    props.dispatch(addMessageActionCreator())
    // props.updateNewMessage('')
  }
  let onMessageChange = ()=> {
    let messageText = newMessage.current.value
    // props.updateNewMessage(messageText)
    props.dispatch(updateNewMessageActionCreator(messageText))
  }

  

  // let onSendMessageClick = ()=>{
  //   props.store.dispatch(addMessageActionCreator())
  // }

  // let onNewMessageChange = (e) => {
  //   let body = e.target.value
  //   props.store.dispatch(updateNewMessageActionCreator(body))
  // }


  return (
    <div className={styles.dialogs}>
       <div className={styles.dialogsItems}> 
        {dialogsElements}  
       </div>
       <div className={styles.messages}> 
        <div>{messagesElements}</div>  
        <div>
          {/* <div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder='Enter your message' ></textarea>
          </div> */}
           <div><textarea
          onChange={onMessageChange}
          ref={newMessage}
          value = {props.dialogsState.newMessageText} /></div>          
          {/* <div><button onClick={onSendMessageClick}>Send Message</button></div>   */}
          <div><button onClick={addMessage}>Send Message</button></div>  
        </div>          
       </div>    
    </div>
  )
}

export default Dialogs