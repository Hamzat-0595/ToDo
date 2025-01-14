import { DELETE_TODO, SAVE_TODO } from "./constants";

const initialState = {
  todos: [],
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
export default reduser;
