import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const sendPasswordInstructions = (user, history) => {
  return(dispatch) => {
    axios.post('/api/forgot_password/send', { user })
      .then( res => {
        dispatch(setFlash('Your password reset instructions has been sent', 'olive'))
        dispatch({ type: res.headers });
        history.push('/login');
      })
      .catch( err => {
        console.log(err.message)
        const { email } = user;
        dispatch(setHeaders(err.headers));
        dispatch(setFlash(`Failed to send email to ${email}`, 'red'));
      })
  }
}

export const forgotPassword = (password, history) => {
  return(dispatch) => {
    axios.post(`/api/forgot_password/reset`, { password })
      .then( res => {
        dispatch({ type: res.headers });
        dispatch(setFlash('Your password has been updated please log in', 'green'))
        history.push('/login');
      })
      .catch( err => {
        const message = err.response.data.errors;
        dispatch(setHeaders(err.headers));
        dispatch(setFlash(message, 'red'));
      })
  }
}
