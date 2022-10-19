import React from 'react';
import './TodoList.css';

interface ToDoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

export const ToDoList: React.FC<ToDoListProps> = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, item.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};
