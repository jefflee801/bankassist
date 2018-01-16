import axios from 'axios';
import { login } from '../actions/auth';
import { setHeaders } from '../actions/headers';

export const registerMxUser = (id, first_name, last_name,history) => {
  return dispatch => {
    axios.post('/api/create_mx_user',  {id, first_name, last_name} )
      .then(res => {
        const { data, headers } = res;
        dispatch(login(data));
        dispatch(setHeaders(headers));
        history.push('/Profile');
      })
      .catch(res => {
        console.log(res)
      });
  };
};


