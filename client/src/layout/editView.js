import React from 'react';
import { updateTodo} from '../redux/actions/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class EditView extends React.Component {
  state = {
    todo: {...this.props.selectTodo[0]},
    redirect: false,
  };
  
   saveEdit = event => {
    event.preventDefault();
    this.props.updateNote(this.state.todo,this.state.todo.id);
    this.setState({
      redirect: true,
    });
  };

   changeValue = event => {
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value,
      },
    });
  };

   render() {
    return (
      <div className="card" style={{width: '90%',marginLeft: '5%',height:'600px'}}>
      <div className="card-body">
        <form onSubmit={this.saveEdit}>
        <div className="form-group">
          <input
            type="text"
            value={this.state.todo.title}
            name="title"
            placeholder="Note Title"
            onChange={this.changeValue}
            className="form-control"
            style={{fontSize:'50px'}}
          />
          <textarea style={{height:'420px',fontSize:'30px'}}
            name="content"
            value={this.state.todo.content}
            placeholder="Note Content"
            onChange={this.changeValue}
            className="form-control"
          />
          <div className="modal-footer">
          <button type="submit" className="btn btn-dark" >
            Save
          </button>
          </div>
          </div>
        </form>
        {this.state.redirect && <Redirect to={`/view/${this.state.todo.id}`} />}
      </div>
      </div>
    );
  }
}

 const mapStateToProps = state => {
  return {
    selectTodo: state.selectTodo,
  };
};

 export default connect(mapStateToProps, { updateTodo })(EditView);