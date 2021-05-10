import React from 'react';

//container & components
import { Counter } from './components/counter/Counter';
import KanbanBoard from './container/KanbanBoard/KanbanBoard';

//styles
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <Counter /> */}
      <KanbanBoard />
    </div>
  );
}

export default App;
