import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer'
// import StoreContext from '../../storeContext'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'



/*const DialogsContainer = (props) => {
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
} */

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch)=> {
  return {
    updateNewMessageBody: ()=>{
      dispatch(addMessageActionCreator())
    },
    sendMessage: (body)=>{
      dispatch(updateNewMessageActionCreator(body))
    }
  }
}

const DialogsContainer  = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer