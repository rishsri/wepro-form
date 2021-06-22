import React, { useState } from 'react';
import FormSignup from './FormSignup';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <span>Signup Succesfully</span>
        )}
      </div>
    </>
  );
};

export default Form;