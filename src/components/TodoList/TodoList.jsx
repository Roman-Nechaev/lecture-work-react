import React from 'react';
import Todo from 'components/Todo/Todo';

import './TodoList.scss';

import classNames from 'classnames';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => {
            onToggleCompleted(id);
          }}
          onDelete={() => {
            onDeleteTodo(id);
          }}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
