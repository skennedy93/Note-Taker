import React from "react";
import Note from '../notes/note'
import { connect } from 'react-redux';

const NoteView = props => {
    return (
<div class="container">
    <div class="row">
          {props.notes.map(note => {
            return (
      <div key={note.id} class="col">
              <Note note={note} />
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
  
  export default connect(mapStateToProps)(NoteView);