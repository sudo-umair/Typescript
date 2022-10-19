import React, { useState } from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';
import { NewTodo } from './components/NewTodo';
import { Todo } from './todo.model';

function App(): React.ReactElement {
  // const todos = [
  //   { id: 't1', text: 'Learn React' },
  //   { id: 't2', text: 'Learn TypeScript' },
  // ];

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodoList((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <ToDoList items={todoList} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
