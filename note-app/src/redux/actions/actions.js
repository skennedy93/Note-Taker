import axios from 'axios';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const TOGGLE_DELETE = 'TOGGLE_MODAL';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const GET_NOTE = 'GET_NOTE';
export const GET_ERROR = 'SELECT_ERROR';
export const ERROR_ADDING_NOTE = 'ERROR_ADDING_NOTE';
export const NOTES_FETCHED = 'NOTES_FETCHED';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const DELETE_ERROR = 'DELETE_ERROR';
export const UPDATE_ERROR = 'UPDATE_ERROR';

const URL = 'http://localhost:4000/api/notes';

export const fetchNotes = () => {
  return dispatch => {
    axios
      .get(`${URL}`)
      .then(({ data }) => {
        dispatch({ type: NOTES_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: err });
      });
  };
};

 export const addNote = note => {
  return dispatch => {
    axios
      .post(`${URL}`, note)
      .then(({ data }) => {
        dispatch(fetchNotes(data));
      })
      .catch(err => {
        dispatch({ type: ERROR_ADDING_NOTE, payload: err });
      });
    };
  };
  export const deleteNote = id => {
    return dispatch => {
      axios
        .delete(`${URL}/${id}`)
        .then(res => {
          dispatch({ type: DELETE_NOTE});
        })
        .then(() => {
          dispatch(fetchNotes());
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
  export const updateNote = note => {
    return dispatch => {
      axios
      .put(`${URL}`, note)
      .then(() => {
        dispatch(fetchNotes());
        dispatch(getNote(note.id));
      })
      .catch(err => {
        dispatch({ type: UPDATE_ERROR, payload: err });
      });
  };
};
export const getNote = id => {
  return dispatch => {
    axios
    .get(`${URL}/${id}`)
    .then(({ data }) => {
      dispatch({ type: GET_NOTE, payload: data });
    })
    .catch(err => {
      dispatch({ type: GET_ERROR, payload: err});
    })
  }
}

 	