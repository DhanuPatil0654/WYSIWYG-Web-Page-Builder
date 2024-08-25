// src/App.js
import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Canvas from './Canvas';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Toolbar />
        <button onClick={() => setIsPreviewMode(!isPreviewMode)}>
          {isPreviewMode ? 'Edit Mode' : 'Preview Mode'}
        </button>
        <Canvas isPreviewMode={isPreviewMode} />
      </div>
    </DndProvider>
  );
};

export default App;
