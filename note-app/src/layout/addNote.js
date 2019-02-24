import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../redux/actions/actions';
import { Redirect } from 'react-router-dom';

 class NewNote extends React.Component {
  state = {
    newNote: {
      title: '',
      content: '',
    },
    redirect: false,
  };

   submitNote = (event) => {
    event.preventDefault();
    this.props.addNote(this.state.newNote);
    this.setState({
      redirect: true,
    })
  }

   changeValue = event => {
    this.setState({ newNote: {...this.state.newNote,[event.target.name]: event.target.value}});
  };

   render() {
    return (
          <div>
         <div class="card" style={{width: '18rem', margin: '5px',}}>
          <div class="card-body">
          <form onSubmit={this.submitNote}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Note Title"
              value={this.state.newNote.title}
              onChange={this.changeValue}
              class="form-control"
            />
            <textarea
              name="content"
              placeholder="Note Content"
              value={this.state.newNote.content}
              onChange={this.changeValue}
              class="form-control"
            />
            <div class="modal-footer">
            <button type="submit" class="btn btn-dark" >
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

 export default connect(null, { addNote })(NewNote);