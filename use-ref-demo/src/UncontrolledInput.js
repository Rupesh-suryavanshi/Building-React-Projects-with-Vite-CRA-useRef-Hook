import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input ref={inputRef} type="text" onChange={handleInputChange} placeholder="Type something" />
      <p>Current Value: {inputRef.current ? inputRef.current.value : ''}</p>
    </div>
  );
}

export default UncontrolledInput;
