import React from 'react';
import ToDoCard from '../todo-card/TodoCard';
import todos from './todos';

function TodoTab() {
  const getTodos = (todos) => {
    return todos.map((todo, i) => {
      return <ToDoCard id={i} todo={todo} />;
    });
  };
  return <div>{getTodos(todos)}</div>;
}

export default TodoTab;
