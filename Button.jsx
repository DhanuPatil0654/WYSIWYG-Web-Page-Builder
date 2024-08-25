// src/Button.js
import React from 'react';
import { useDrag } from 'react-dnd';

const Button = ({ id, left, top }) => {
  const [, drag] = useDrag(() => ({
    type: 'BUTTON',
    item: { id, left, top },
  }));

  return (
    <button ref={drag} style={{ position: 'absolute', left, top }}>
      Click Me
    </button>
  );
};

export default Button;
