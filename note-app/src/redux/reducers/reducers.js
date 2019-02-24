import notes from '../../notes/noteInfo';
import {
  ADD_NOTE,
  DELETE_NOTE,
  TOGGLE_DELETE,
  UPDATE_NOTE,
  GET_NOTE,
} from '../actions/actions';

const currentState = {
  notes: notes,
  modalVisible: false,
  id: notes.length + 1,
  selectNote: {},
};

const reducers = (state = currentState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        ...action.payload,
        id: state.id,
      };
      return {
        ...state,
        notes: [...state.notes, newNote],
        id: state.id + 1,
      };
      case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== state.selectNote.id),
        modalVisible: !state.modalVisible,
        selectNote: {},
      };
      case TOGGLE_DELETE:
      return {
        ...state,
        modalVisible: !state.modalVisible,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id !== action.payload.id) return note;
          return action.payload;
        }),
        selectNote: action.payload
      };
    case GET_NOTE:
      return {
        ...state,
        selectNote: state.notes.filter(note => note.id === action.payload)[0],
      }
    default:
      return state;
  }
};

export default reducers;