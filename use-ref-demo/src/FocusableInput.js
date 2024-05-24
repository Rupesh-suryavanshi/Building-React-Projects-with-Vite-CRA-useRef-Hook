import React, { useEffect, useRef } from 'react';

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Focusable Input</h2>
      <input ref={inputRef} type="text" placeholder="Focus me on mount" />
    </div>
  );
}

export default FocusableInput;
