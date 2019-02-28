import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleDelete } from '../redux/actions/actions';

 const Note = props => {
   return (
<div className="card" style={{width: '90%',marginLeft: '5%',height:'600px'}}>
  <div className="card-body">
        <h5 className="card-title">{props.selectNote.title}</h5>
        <p className="card-text">{props.selectNote.content}</p>
        <div className="modal-footer">
        <Link type="button" className="btn btn-dark" to={`/edit/${props.selectNote.id}`}>
          <div>Edit</div>
        </Link>
        <button onClick={props.toggleDelete} type="button" className="btn btn-dark">Delete</button>
        </div>
      </div>
    </div>
  );
};

 const mapStateToProps = state => {
  return {
    selectNote: state.selectNote,
  };
};

 export default connect(mapStateToProps, { toggleDelete })(Note);