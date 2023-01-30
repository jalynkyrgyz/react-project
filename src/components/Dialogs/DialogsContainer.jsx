import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer  = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer