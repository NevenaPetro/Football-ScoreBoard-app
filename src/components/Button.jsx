import React from 'react'

function Button({ children, type, isDisabled, handleClick, btnId }) {
    return (
      <button type={type} disabled={isDisabled} onClick={handleClick} id={btnId}>
        {children}
      </button>
    );
  }

export default Button;
