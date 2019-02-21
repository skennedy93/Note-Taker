import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../redux/actions/actions';

 class NewNote extends React.Component {
  state = {
    title: '',
    content: '',
  };

   submitNote = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      content: ''
    })
  }

   changeValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

   render() {
    return (
          <form onSubmit={this.submitNote}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Note Title"
              value={this.state.title}
              onChange={this.changeValue}
              class="form-control"
            />
            <textarea
              name="content"
              placeholder="Note Content"
              value={this.state.content}
              onChange={this.changeValue}
              class="form-control"
            />
            <button  type="submit" class="btn btn-dark" >
            submit
            </button>
            </div>
          </form>
    );
  }
}

 export default connect(null, { addNote })(NewNote);