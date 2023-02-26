import React from 'react'

function Button({ children, className, type, isDisabled, handleClick, btnId }) {
    return (
      <button type={type} className={className} disabled={isDisabled} onClick={handleClick} id={btnId}>
        {children}
      </button>
    );
  }

export default Button;
