import React from 'react';

const NoteData = props => {
  return (
<div className="card">
  <div className="card-body">
    <h3 className="card-title">
    <div>{props.note.title}</div>
    </h3>
  </div>
</div>     
  );
};

export default NoteData;