import { useState } from 'react';

const useInput = () => {
  const [input, setInput] = useState('wizeline');
  const [term, setTerm] = useState('wizeline');

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTerm(input);
  };

  return {
    term,
    input,
    changeHandler,
    submitHandler,
  };
};

export default useInput;
