import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

const App = () => (
  <div className="todo-app">
    <h1 className="todo__app-title">Todo App</h1>
    <div>
      <TodoList />
    </div>
  </div>
);

export default App;
