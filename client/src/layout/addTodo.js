import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/actions';
import { Redirect } from 'react-router-dom';

 class NewTodo extends React.Component {
  state = {
    newTodo: {
      title: '',
      content: '',
    },
    redirect: false,
  };

   submitNote = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      redirect: true,
    })
  }

   changeValue = event => {
    this.setState({ newTodo: {...this.state.newTodo,[event.target.name]: event.target.value}});
  };

   render() {
    return (
          <div>
         <div className="card" style={{width: '90%',marginLeft: '5%',}}>
          <div className="card-body">
          <form onSubmit={this.submitNote}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Note Title"
              value={this.state.newTodo.title}
              onChange={this.changeValue}
              className="form-control"
              style={{fontSize:'50px'}}
             />
            <textarea style={{height:'450px',fontSize:'30px'}}
              name="content"
              placeholder="Note Content"
              value={this.state.newTodo.content}
              onChange={this.changeValue}
              className="form-control"
            />
            <div className="modal-footer">
            <button type="submit" className="btn btn-dark" >
            submit
            </button>
            </div>
            </div>
          </form>
          {this.state.redirect && <Redirect to="/" />}
          </div>
          </div>
          </div>
    );
  }
}

 export default connect(null, { addTodo })(NewTodo);