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
         <div className="card" style={{width: '90%',marginLeft: '5%',}}>
          <div className="card-body">
          <form onSubmit={this.submitNote}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Note Title"
              value={this.state.newNote.title}
              onChange={this.changeValue}
              className="form-control"
              style={{fontSize:'50px'}}
             />
            <textarea style={{height:'450px',fontSize:'30px'}}
              name="content"
              placeholder="Note Content"
              value={this.state.newNote.content}
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

 export default connect(null, { addNote })(NewNote);