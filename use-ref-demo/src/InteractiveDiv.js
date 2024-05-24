import React, { useRef } from 'react';

function InteractiveDiv() {
  const divRef = useRef(null);

  const handleDivClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'lightblue';
    }
  };

  return (
    <div>
      <h2>Interactive Div</h2>
      <div
        ref={divRef}
        onClick={handleDivClick}
        style={{ width: '200px', height: '200px', backgroundColor: 'lightgray', cursor: 'pointer' }}
      >
        Click and change the colour
      </div>
    </div>
  );
}

export default InteractiveDiv;
