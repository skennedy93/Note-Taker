import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleDelete } from '../redux/actions/actions';

 const Note = props => {

  const note = props.notes.filter(
    note => String(note.id) === props.match.params.id)[0];

   return (
<div class="card" style={{width: '18rem', margin: '5px',}}>
  <div class="card-body">
        <h5 class="card-title">{note.title}</h5>
        <p class="card-text">{note.content}</p>
        <div class="modal-footer">
        <Link type="button" class="btn btn-dark" to={`/edit/${note.id}`}>
          <div>Edit</div>
        </Link>
        <button onClick={props.toggleDelete} type="button" class="btn btn-dark">Delete</button>
        </div>
      </div>
    </div>
  );
};

 const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

 export default connect(mapStateToProps, { toggleDelete })(Note);