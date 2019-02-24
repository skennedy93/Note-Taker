import React from "react";
import NoteData from '../notes/note'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getNote} from '../redux/actions/actions'

const NoteView = props => {
    return (
<div class="container">
    <div class="row">
          {props.notes.map(note => {
            return (
            <div key={note.id} class="col">                                       
            <Link to={`/view/${note.id}`} style={{ color: 'black',textDecoration: 'none'}}
             onClick={() => props.getNote(note.id)} >
              <NoteData note={note} />
            </Link>
              </div>  
            );
          })}
    </div>
</div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      notes: state.notes
    }
  }
  
  export default connect(mapStateToProps, {getNote})(NoteView);