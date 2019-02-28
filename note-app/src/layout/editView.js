import React from 'react';
import { updateNote} from '../redux/actions/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class EditView extends React.Component {
  state = {
    note: {...this.props.selectNote[0]},
    redirect: false,
  };
  
   saveEdit = event => {
    event.preventDefault();
    this.props.updateNote(this.state.note);
    this.setState({
      redirect: true,
    });
  };

   changeValue = event => {
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value,
      },
    });
  };

   render() {
     console.log(this.state.note,"note")
    return (
      <div className="card" style={{width: '90%',marginLeft: '5%',height:'600px'}}>
      <div className="card-body">
        <form onSubmit={this.saveEdit}>
        <div className="form-group">
          <input
            type="text"
            value={this.state.note.title}
            name="title"
            placeholder="Note Title"
            onChange={this.changeValue}
            className="form-control"
          />
          <textarea style={{height:'450px'}}
            name="content"
            value={this.state.note.content}
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
        {this.state.redirect && <Redirect to={`/view/${this.state.note.id}`} />}
      </div>
      </div>
    );
  }
}

 const mapStateToProps = state => {
  return {
    selectNote: state.selectNote,
  };
};

 export default connect(mapStateToProps, { updateNote })(EditView);