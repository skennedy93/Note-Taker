import React from 'react';
import { updateNote} from '../redux/actions/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EditView extends React.Component {
  state = {
    note: {...this.props.selectNote},
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
    return (
      <div className="card" style={{width: '18rem', margin: '5px',}}>
      <div className="card-body">
        <form  onSubmit={this.saveEdit}>
        <div className="form-group">
          <input
            type="text"
            value={this.state.note.title}
            name="title"
            placeholder="Note Title"
            onChange={this.changeValue}
            className="form-control"
          />
          <textarea
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
        {this.state.redirect && <Redirect to={`/view/${this.state.note._id}`} />}
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