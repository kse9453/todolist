import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        <h3>TO DO LIST</h3>
      </div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
