import axios from 'axios';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_DELETE = 'TOGGLE_MODAL';
export const UPDATE_TODO = 'UPDATE_TODO';
export const GET_TODO = 'GET_TODO';
export const GET_ERROR = 'SELECT_ERROR';
export const ERROR_ADDING_TODO = 'ERROR_ADDING_TODO';
export const TODOS_FETCHED = 'TODOS_FETCHED';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const DELETE_ERROR = 'DELETE_ERROR';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const TODO_UPDATED = 'TODO_UPDATED';

const URL = 'https://localhost:4000/api/todos';

export const fetchTodos = () => {
  return dispatch => {
    axios
      .get(`${URL}`)
      .then(({ data }) => {
        dispatch({ type: TODOS_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: err });
      });
  };
};

 export const addTodo = todo => {
  return dispatch => {
    axios
      .post(`${URL}`, todo)
      .then(({ data }) => {
        dispatch(fetchTodos(data));
      })
      .catch(err => {
        dispatch({ type: ERROR_ADDING_TODO, payload: err });
      });
    };
  };
  export const deleteTodo = id => {
    return dispatch => {
      axios
        .delete(`${URL}/${id}`)
        .then(res => {
          dispatch({ type: DELETE_TODO});
        })
        .then(() => {
          dispatch(fetchTodos());
        })
        .catch(err => {
          dispatch({ type: DELETE_ERROR, payload: err });
        });
    };
  };
export const toggleDelete = () => {
    return {
      type: TOGGLE_DELETE,
    }
  }
  export const updateTodo = (todo,id)=> {
    return dispatch => {
      axios
      .put(`${URL}/${id}`, todo)
      .then( data  => {
        dispatch({ type: TODO_UPDATED, payload: data });
        dispatch(getTodo(id));
      })
      .catch(err => {
        dispatch({ type: UPDATE_ERROR, payload: err });
      });
  };
};
export const getTodo = id => {
  return dispatch => {
    axios
    .get(`${URL}/${id}`)
    .then(({ data }) => {
      dispatch({ type: GET_TODO, payload: data });
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err});
    })
  }
}

 	