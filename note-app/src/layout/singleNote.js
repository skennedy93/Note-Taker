import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleDelete } from '../redux/actions/actions';

 const Note = props => {
const noteInfo = props.selectNote[0]

if (noteInfo){return(<div className="card" style={{width: '90%',marginLeft: '5%'}}>
  <div className="card-body">
        <h5 className="card-title" style={{fontSize:'55px'}}>{noteInfo.title}</h5>
        <p className="card-text" style={{fontSize:'35px'}}>{noteInfo.content}</p>
        <div className="modal-footer">
        <Link type="button" className="btn btn-dark" to={`/edit/${noteInfo.id}`}>
          <div>Edit</div>
        </Link>
        <button onClick={props.toggleDelete} type="button" className="btn btn-dark">Delete</button>
        </div>
      </div>
    </div>)}
    else {return <h1>Loading...</h1>}
};

 const mapStateToProps = state => {
  return {
    selectNote: state.selectNote,
  };
};

 export default connect(mapStateToProps, { toggleDelete })(Note);