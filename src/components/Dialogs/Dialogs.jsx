import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'



const Dialogs = (props) => {
  let dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrew"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Valera"},
  ]

  let messages = [
    {id:1, message: "Hi"},
    {id:2, message: "How is your Kamasutra"},
    {id:3, message: "Yohey"},
    {id:4, message: "Yohe"},
    {id:5, message: "Yo"},
  ]

  let dialogsElements = dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />
  })  
  //  let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) 

  let messagesElements =  messages.map((message)=> {
    return <Messages message={message.message} id={message.id} />
  })

  // let messagesElements = messages.map(m => <Message message = {m.message} id={m.id} />)


  return (
    <div className={styles.dialogs}>
       <div className={styles.dialogsItems}>
          {dialogsElements}          
       </div>
       <div className={styles.messages}>
          {messagesElements}         
       </div>
    </div>
  )
}

export default Dialogs