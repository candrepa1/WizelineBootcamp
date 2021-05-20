import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import login from '../../auth/login';

const useForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sessionData, setSessionData] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e, modalToggle, modal) => {
    e.preventDefault();
    login(username, password)
      .then((result) => {
        setSessionData(result);
        modalToggle(!modal);
      })
      .catch((err) => setError(err.message));
  };

  const logout = () => {
    setSessionData('');
    history.push('/');
  };

  return {
    sessionData,
    error,
    usernameChangeHandler,
    passwordChangeHandler,
    handleSubmit,
    logout,
  };
};

export default useForm;
