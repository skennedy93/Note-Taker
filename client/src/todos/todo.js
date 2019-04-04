import React from 'react';

const TodoData = props => {
  return (
<div className="card">
  <div className="card-body">
    <h3 className="card-title">
    <div>{props.todo.title}</div>
    </h3>
  </div>
</div>     
  );
};

export default TodoData;