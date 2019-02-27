import React from 'react';

const NoteData = props => {
  return (
<div className="card" style={{width: '18rem', margin: '5px',}}>
  <div className="card-body">
    <h3 className="card-title"><div>{props.note.title}</div></h3>
    <div className="card-text"><p>{props.note.content}</p></div>
  </div>
</div>     
  );
};

export default NoteData;