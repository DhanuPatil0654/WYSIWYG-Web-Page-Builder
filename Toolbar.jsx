// src/Toolbar.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type },
    collect: (monitor) => ({
      isDragging: !! monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

const Toolbar = () => {
  return (
    <div className='mb-3'>
      <DraggableItem type="TEXT" className='p-5'><b>Text Box</b></DraggableItem>
      <DraggableItem type="IMAGE" className='p-5'><b>Image</b></DraggableItem>
      <DraggableItem type="BUTTON" className='p-5'><b>Button</b></DraggableItem>
    </div>
  );
};

export default Toolbar;
