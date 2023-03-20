import React, { Component } from 'react';
import shortid from 'shortid';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';
import Form from './Form/Form';
import TodoEditor from './TodoEditor';
import TodoFilter from './TodoFilter';
import Modal from './Modal/index';
import Clock from './Clock/index';
import Tabs from './Tabs/index';
import initialTodos from '../todos.json';
import tabs from '../tabs.json';
import IconButton from './IconButton';

import { ReactComponent as AddIcon } from '../icons/add.svg';

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
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('componentDidMount');

    const todo = localStorage.getItem('todos');
    const parsItemTodo = JSON.parse(todo);

    if (parsItemTodo) {
      // проверяем если есть данные то передавать в хранилище
      this.setState({ todos: parsItemTodo });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log('Обновилось поле todos');
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    // todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return { ...todo, completed: !todo.completed };
    //     }
    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { todos, filter, showModal } = this.state;

    const totalTodoCount = todos.length;
    const completedTodo = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <h1>Состояние компонента</h1> */}
        {/* <Tabs items={tabs} /> */}

        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width={40} height={40} fill="blue" />
        </IconButton>
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodo} </p>
        </div>

        <TodoFilter value={filter} onChange={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        {/* <Form onSubmit={this.formSubmitHandler} /> */}
      </>
    );
  }
}

export default App;
