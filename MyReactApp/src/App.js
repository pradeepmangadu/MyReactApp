import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './Components/Todos'
import Header from './Components/Layout/Header'
import AddTodo from './Components/AddTodo' 
//import uuid from 'uuid'
import About from './Components/pages/About'
import axios from 'axios'

class App extends Component {
  state ={
    todos:[
     
    ]
  }
 
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos:res.data}))
  }

  //Toggle Complete
  markComplete=(id)=>{
  this.setState({todos: this.state.todos.map(todo=>{
  if (todo.id === id){
    todo.completed= !todo.completed
  }
  return todo;
  })
  });
  }

  //delete Item
  deleteItem=(id)=>{
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res=>this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]}));
  }

  //Add Todo
  addTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {title,
    completed: false}).then(res=>
    this.setState({todos:[...this.state.todos, res.data]}));
  }

  
  render() {
      return (
        <Router>
          <div className="App">
            <div className='container'>
                <Header/>
                <Route exact path="/" render={props =>(
                  <React.Fragment>
                      <AddTodo addTodo={this.addTodo}/>
                      <Todos todos={this.state.todos} 
                       markComplete={this.markComplete} 
                      deleteItem={this.deleteItem}/>
                  </React.Fragment>
                )}/>
                <Route path="/about" component={About}/>
                
            </div>  
          </div>
          </Router>
      );
  }
}

export default App;
