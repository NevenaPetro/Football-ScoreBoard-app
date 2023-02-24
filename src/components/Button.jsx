import React from 'react'

function Button({ children, type, isDisabled, handleClick }) {
    return (
      <button type={type} disabled={isDisabled} onClick={handleClick}>
        {children}
      </button>
    );
  }

export default Button;
