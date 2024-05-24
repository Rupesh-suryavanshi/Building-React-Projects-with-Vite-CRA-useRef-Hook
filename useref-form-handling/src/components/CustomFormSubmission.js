import React, { useRef, useState } from 'react';

function CustomFormSubmission() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleValidation = () => {
    if (firstNameRef.current.value.length < 3) {
      setFirstNameError('First name must be at least 3 characters long.');
    } else {
      setFirstNameError('');
    }

    if (lastNameRef.current.value.length < 3) {
      setLastNameError('Last name must be at least 3 characters long.');
    } else {
      setLastNameError('');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailRef.current.value)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation();

    if (!firstNameError && !lastNameError && !emailError) {
      const formData = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
      };
      console.log('Form Submitted:', formData);
    
    } else {
      console.log('Validation Errors:', { firstNameError, lastNameError, emailError });
    }
  };

  const handleKeyDown = (event, nextRef) => {
    if (event.key === 'Enter') {
      handleValidation();
      nextRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Custom Form Submission Handling</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            ref={firstNameRef}
            onBlur={handleValidation}
            onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
          />
          {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            ref={lastNameRef}
            onBlur={handleValidation}
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
          />
          {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            ref={emailRef}
            onBlur={handleValidation}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomFormSubmission;
