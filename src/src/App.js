import React, { Component } from 'react';
import { TodoList } from './TodoList';
import '../public/css/framework7.material.min.css';
import '../public/css/framework7.material.colors.min.css';
import '../public/css/custom.css';

class App extends Component {

  constructor() {
    super();
    this.actions = {
      onAddTodo: () => this.onAddTodo(),
      toggleTodo: (todoId) => this.toggleTodo(todoId),
      removeTodo: (todoId) => this.removeTodo(todoId),
      changeTodoText: (todoId, newText) => this.changeTodoText(todoId, newText),
      changeTodoCount: (todoId, newCount) => this.changeTodoCount(todoId, newCount)
    };
    const LSState = JSON.parse(window.localStorage.getItem('STATE'));
    this.state = (LSState !== undefined && LSState !== null) ? LSState : {
      filter: 'ALL',
      nextId: 2,
      todos: [
        { id: 0, text: 'egg', count: "1", done: false },
        { id: 1, text: 'milk', count: "3", done: true },
      ]
    };
    this.state.filter = 'ALL';
  }

  componentWillUpdate(nextProps, nextState) {
    window.localStorage.setItem('STATE', JSON.stringify(nextState));
  }

  changeFilter(filterName) {
    this.setState({ filter: filterName });
  }

  onAddTodo() {
    this.state.todos.push({ id: this.state.nextId++, text: '', count: "0", done: false });
    this.setState({});
  }

  toggleTodo(todoId) {
    const todo = this.state.todos.find((todo) => todo.id === todoId);
    todo.done = !todo.done;
    this.setState({});
  }

  removeTodo(todoId) {
    const todo = this.state.todos.find((todo) => todo.id === todoId);
    const index = this.state.todos.indexOf(todo);
    this.state.todos.splice(index, 1);
    this.setState({});
  }

  changeTodoText(todoId, newText) {
    const todo = this.state.todos.find((todo) => todo.id === todoId);
    todo.text = newText;
    this.setState({});
  }

  changeTodoCount(todoId, newCount) {
    const todo = this.state.todos.find((todo) => todo.id === todoId);
    todo.count = newCount;
    this.setState({});
  }

  render() {
    return (
      <div className="views">
        <div className="view">
          <div className="page">
            <div className="page-content">
              <h2>Shoping Cart</h2>
              <div className="buttons-row">
                <a href="#" className={`button ${this.state.filter === 'ALL' ? 'button-fill' : ''}`}
                  onClick={() => this.changeFilter('ALL')}>{`All [${this.state.todos.length}]`}</a>
                <a href="#" className={`button ${this.state.filter === 'NOTDONE' ? 'button-fill' : ''}`}
                  onClick={() => this.changeFilter('NOTDONE')}>{`NOT DONE [${this.state.todos.filter(t => !t.done).length}]`}</a>
                <a href="#" className={`button ${this.state.filter === 'DONE' ? 'button-fill' : ''}`}
                  onClick={() => this.changeFilter('DONE')}>{`DONE [${this.state.todos.filter(t => t.done).length}]`}</a>
              </div>
              <TodoList
                todos={this.state.todos}
                filter={this.state.filter}
                actions={this.actions}
                />
            </div>
            <a href="#" className="floating-button" onClick={() => this.onAddTodo()}>
              <i className="icon icon-plus"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
