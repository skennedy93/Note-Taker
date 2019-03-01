import React from 'react';
import { connect } from 'react-redux';
import { toggleDelete, deleteNote } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

const DeleteModal = props => {
  const noteInfo = props.selectNote[0]
  return (
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
        <button onClick={props.toggleDelete} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Are you sure you want to delete this note?
      </div>
      <div className="modal-footer">
        <button onClick={props.toggleDelete}
         type="button"
          className="btn btn-dark" >
        Close
        </button>
        <Link to="/"
        
         onClick={() => props.deleteNote(noteInfo.id)}
            type="button" className="btn btn-danger">
            Delete
        </Link>
        
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    selectNote: state.selectNote,
  }
}

export default connect(mapStateToProps, { toggleDelete, deleteNote })(DeleteModal);