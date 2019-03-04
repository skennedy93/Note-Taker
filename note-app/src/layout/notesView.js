import React from "react";
import NoteData from '../notes/note'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getNote, fetchNotes} from '../redux/actions/actions'

class NoteView extends React.Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  }
  render(){
    return (
<div className="container">
    <div className="row">
          {this.props.notes.map(note => {
            return (
            <div key={note.id} className="col"style = {{flexGrow: 0,}}>                                       
            <Link to={`/view/${note.id}`} style={{ color: 'black',textDecoration: 'none'}}
             onClick={() => this.props.getNote(note.id)} >
              <NoteData note={note} />
            </Link>
              </div>  
            );
          })}
    </div>
</div>
    );
  }
  };
  
  const mapStateToProps = state => {
    return {
      notes: state.notes
    }
  }
  
  export default connect(mapStateToProps, {getNote, fetchNotes})(NoteView);