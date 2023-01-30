import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch)=> {
  return {
    updateNewMessageBody: (body)=>{
      dispatch(updateNewMessageActionCreator(body))
    },
    sendMessage: ()=>{
      dispatch(addMessageActionCreator ())
    }
  }
}

const DialogsContainer  = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer