import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { todos } from "./todos.json";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  removeTodo(index) {
    if (window.confirm("Estas seguro de eliminar la tarea?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        }),
      });
    }
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div key={i} className="col-md-4">
          <div className="card mt-4 text-black">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill bg-danger ml-2 pb-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <mark>{todo.responsible}</mark>
              </p>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="google.com" className="text-white">
            Task -{"  "}
            <span className="badge rounded-pill bg-light text-dark ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">{todos}</div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <TodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
