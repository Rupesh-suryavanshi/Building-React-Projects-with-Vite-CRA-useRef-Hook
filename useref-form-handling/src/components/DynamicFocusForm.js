import React, { useRef } from 'react';

function DynamicFocusForm() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const handleKeyDown = (event, nextRef) => {
    if (event.key === 'Enter') {
      nextRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Dynamic Form Input Focus</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            ref={firstNameRef}
            onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            ref={lastNameRef}
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            ref={emailRef}
          />
        </div>
      </form>
    </div>
  );
}

export default DynamicFocusForm;
