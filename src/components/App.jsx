import React, { Component } from 'react';

import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';

import initialTodos from '../todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    console.log(completedTodo);
    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodo} </p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
