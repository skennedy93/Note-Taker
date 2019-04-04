import React from "react";
import TodoData from '../notes/note'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getTodo, fetchTodos} from '../redux/actions/actions'

class TodoView extends React.Component {
  componentDidMount = () => {
    this.props.fetchTodos();
  }
  render(){
    return (
<div className="container">
<div className="card">
<div className="card-body">
<div style={{  display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
<h1 style={{ marginLeft: 20}}>Your List</h1>
<Link style={{ height:40}}type="button" className="btn btn-dark" to={`/add`}>
Add Todo
</Link>
</div>

    <div className="column">
          {this.props.todos.map(todo => {
            return (
            <div key={todo.id} className="col"style = {{flexGrow: 0,}}>                                       
            <Link to={`/view/${todo.id}`} style={{ color: 'black',textDecoration: 'none'}}
             onClick={() => this.props.getTodo(todo.id)} >
              <TodoData todo={todo} />
            </Link>
              </div>  
            );
          })}
          </div>
       </div>
   </div>
</div>
    );
  }
  };
  
  const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
  
  export default connect(mapStateToProps, {getTodo, fetchTodos})(TodoView);