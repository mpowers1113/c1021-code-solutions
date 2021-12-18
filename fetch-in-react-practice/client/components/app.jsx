import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/todos')
      .then(res => {
        if (!res.ok) throw new Error('Response is not ok');
        else return res.json();
      })
      .then(res => this.setState({ todos: res }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {

    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => {
        if (!res.ok) throw new Error('error in post request');
        else return res.json();
      })
      .then(res => {
        this.setState({ todos: this.state.todos.concat(res) });
      });
  }

  toggleCompleted(todoId) {
    const arrayCopy = [...this.state.todos];
    const targetIndex = arrayCopy.findIndex(todo => todo.todoId === todoId);
    let targetIsCompleted = null;
    arrayCopy[targetIndex].isCompleted === true ? targetIsCompleted = false : targetIsCompleted = true;
    fetch(`http://localhost:3000/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompleted: targetIsCompleted })
    })
      .then(res => res.json())
      .then(res => {
        arrayCopy[targetIndex] = res;
        this.setState({ todos: arrayCopy });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
