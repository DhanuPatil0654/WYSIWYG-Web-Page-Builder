// src/Canvas.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import TextBox from './TextBox';
import Button from './Button';
import Image from './Image';
import './App.css'

const Canvas = ({ isPreviewMode }) => {
  const [components, setComponents] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['TEXT', 'IMAGE', 'BUTTON'],
    drop: (item) => {
      setComponents([...components, { ...item, id: Date.now() }]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      <h4 className='mt-3 ml-3'>Drag Here Any Component (image , button , text box)</h4>
      <div ref={drop} className='dragarea mb-5'>
        {isPreviewMode ? (
          components.map((component) => {
            switch (component.type) {
              case 'TEXT':
                return <TextBox key={component.id} id={component.id} left={component.left} top={component.top} />;
              case 'IMAGE':
                return <Image key={component.id} id={component.id} left={component.left} top={component.top} />;
              case 'BUTTON':
                return <Button key={component.id} id={component.id} left={component.left} top={component.top} />;
              default:
                return null;
            }
          })
        ) : (
          <div className='p-3'>Design Mode</div>
        )}
      </div>
    </>
  );
};

export default Canvas;
