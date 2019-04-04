import {
  TODOS_FETCHED,
  ERROR_FETCHING,
  ERROR_ADDING_TODO,
  DELETE_TODO,
  DELETE_ERROR,
  TOGGLE_DELETE,
  UPDATE_ERROR,
  GET_TODO,
  GET_ERROR,
  TODO_UPDATED,
} from '../actions/actions';

const currentState = {
  todos: [],
  modalVisible: false,
  selectTodo: {},
  authed: false,
  error: null,
};

const reducers = (state = currentState, action) => {
  switch (action.type) {
    case ERROR_ADDING_TODO:
      return {
        ...state,
        error: action.payload,
      };
    case TODOS_FETCHED:
      return {
        ...state,
        notes: action.payload,
      };
    case ERROR_FETCHING:
      return {
        ...state,
        error: action.payload,
      };
      case DELETE_TODO:
      return {
        ...state,
        modalVisible: !state.modalVisible,
        selectTodo: {},
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
      case TODO_UPDATED:
      return {
        ...state,
        selectTodo: action.payload,
      };
      case UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_TODO:
    return {
      ...state,
      selectTodo: action.payload,
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