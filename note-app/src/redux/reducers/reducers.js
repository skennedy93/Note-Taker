import notes from '../../notes/noteInfo';
import {
  NOTES_FETCHED,
  ERROR_FETCHING,
  ERROR_ADDING_NOTE,
  DELETE_NOTE,
  DELETE_ERROR,
  TOGGLE_DELETE,
  UPDATE_ERROR,
  GET_NOTE,
  GET_ERROR,
} from '../actions/actions';

const currentState = {
  notes: [],
  modalVisible: false,
  selectNote: {},
  authed: false,
};

const reducers = (state = currentState, action) => {
  switch (action.type) {
    case ERROR_ADDING_NOTE:
      return {
        ...state,
        error: action.payload,
      };
    case NOTES_FETCHED:
      return {
        ...state,
        notes: action.payload,
      };
    case ERROR_FETCHING:
      return {
        ...state,
        error: action.payload,
      };
      case DELETE_NOTE:
      return {
        ...state,
        modalVisible: !state.modalVisible,
        selectNote: {},
      };
      case DELETE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      case TOGGLE_DELETE:
      return {
        ...state,
        modalVisible: !state.modalVisible,
      };
      case UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_NOTE:
    return {
      ...state,
      selectNote: action.payload,
      }
      case GET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;