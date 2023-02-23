import React from 'react'

function Button({ children, type, isDisabled }) {
    return (
      <button type={type} disabled={isDisabled} >
        {children}
      </button>
    );
  }

export default Button;
