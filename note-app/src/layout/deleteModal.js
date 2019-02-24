import React from 'react';
import { connect } from 'react-redux';
import { toggleDelete, deleteNote } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

const DeleteModal = props => {
  return (
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
        <button onClick={props.toggleDelete} type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete this note?
      </div>
      <div class="modal-footer">
        <button onClick={props.toggleDelete} type="button" class="btn btn-dark" >Close</button>
        <Link to="/" onClick={props.deleteNote}  type="button" class="btn btn-danger">Delete</Link>
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { toggleDelete, deleteNote })(DeleteModal);