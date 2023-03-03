import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "set-current": {
      return { ...state, currentTodo: action.payload };
    }

    case "add": {
      action.payload !== "" && state.todos.push(action.payload);
      return { ...state, currentTodo: "" };
    }

    default: {
      throw new Error(`Unsupported action ${JSON.stringify(action)}`);
    }
  }
};

const TodoProvider = ({ children }) => {
  const initialState = {
    currentTodo: "",
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
