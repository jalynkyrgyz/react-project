import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Messages from './Messages/Messages'
import { Navigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'


const Dialogs = (props) => {

 let state = props.dialogsPage

  let dialogsElements = state.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name}  id={dialog.id} />
  })  
  
  let messagesElements =  state.messages.map((message)=> {
    return <Messages message={message.message}  id={message.id} />
  })
  
  // let newMessageBody = state.newMessageBody


  let addNewMessage = (values)=> {
      props.sendMessage(values.newMessageBody)
  }

  if(!props.isAuth) return <Navigate to={"/login"} />

  return (
    <div className={styles.dialogs}>
       <div className={styles.dialogsItems}> 
        {dialogsElements}  
       </div>
       <div className={styles.messages}> 
        <div>{messagesElements}</div>                  
       </div>
       <AddMessageFormRedux onSubmit={addNewMessage}/>    
    </div>
  )
}



const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props)=>{
  return (
    <form onSubmit={props.handleSubmit} >          
      <div>
        <Field component={Textarea} name='newMessageBody' placeholder = "Enter your message"
        validate={[required, maxLength50 ]} />           
      </div>          
      <div>
        <button>Send Message</button>
      </div>  
    </form>  
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs