// src/TextBox.js
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import Form from 'react-bootstrap/Form';
import './App.css'
const TextBox = ({ id, left, top }) => {
  const [text, setText] = useState();
  const [, drag] = useDrag(() => ({
    type: 'TEXT',
    item: { id, left, top },
  }));

  return (
    <div ref={drag} className='textbox mt-3 ml-3' >
      <Form.Group className="mb-3 textarea" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Text Box</Form.Label>
        <Form.Control as="textarea" rows={3} value={text} placeholder='text here' onChange={(e) => setText(e.target.value)} />
      </Form.Group>
    </div>
  );
};

export default TextBox;
