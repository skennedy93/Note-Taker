import React from 'react';

const Note = props => {
  return (
<div class="card" style={{width: '18rem', margin: '5px',}}>
  <div class="card-body">
    <h5 class="card-title"><h3>{props.note.title}</h3></h5>
    <p class="card-text"><p>{props.note.content}</p></p>
    <a href="#" class="card-link">blank</a>
    <a href="#" class="card-link">blank</a>
  </div>
</div>     
  );
};

export default Note;