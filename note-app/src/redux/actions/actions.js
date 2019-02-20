export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const TOGGLE_DELETE = 'TOGGLE_MODAL';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const GET_NOTE = 'SELECT_NOTE';

export const addNote = note => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const deleteNote = (id) => {
    return {
      type: DELETE_NOTE,
      payload: id,
    }
  }

export const toggleDelete = () => {
    return {
      type: TOGGLE_DELETE,
    }
  }

export const updateNote = note => {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
};

export const getNote = (id) => {
  return {
    type: GET_NOTE,
    payload: id
  }
}