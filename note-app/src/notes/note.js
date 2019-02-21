import React from 'react';
import { toggleDelete} from '../redux/actions/actions';
import { connect } from 'react-redux';

const Note = props => {
  return (
<div class="card" style={{width: '18rem', margin: '5px',}}>
  <div class="card-body">
    <h5 class="card-title"><h3>{props.note.title}</h3></h5>
    <p class="card-text"><p>{props.note.content}</p></p>
    <a href="#" onClick={props.toggleDelete} class="card-link">Delete</a>
    <a href="#" class="card-link">Edit</a>
  </div>
</div>     
  );
};

const mapStateToProps = (state) => {
    return {
      notes: state.notes,
    }
  }

export default connect(mapStateToProps, { toggleDelete})(Note);