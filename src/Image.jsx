// src/Image.js
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';


const Image = ({ id, left, top }) => {
  const [src, setSrc] = useState('');
  const [, drag] = useDrag(() => ({
    type: 'IMAGE',
    item: { id, left, top },
  }));

  return (
    <div ref={drag} style={{ position: 'absolute', left, top }}>
      <input type="file" onChange={(e) => setSrc(URL.createObjectURL(e.target.files[0]))} />
      {src && <img src={src} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
    </div>
  );
};

export default Image;
