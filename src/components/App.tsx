import React from 'react';
import TodoList from './TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <div className='todo-app'>
        <TodoList />
      </div>
    </>
  );
};

export default App;
