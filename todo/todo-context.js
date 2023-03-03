import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "set-current": {
      return { ...state, currentTodo: action.payload };

      //   produce(state, (draft) => {
      //     draft.currentTodo = action.payload;
      //   });
    }
    
    // case "add": {
    //   return produce(state, (draft) => {
    //     draft.todos.push(action.payload);
    //   });
    // }
    // case "update": {
    //   const todoIndex = state.todos.findIndex(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   if (todoIndex === -1) return state;
    //   return produce(state, (draft) => {
    //     draft.todos[todoIndex] = { ...action.payload };
    //   });
    // }
    // case "delete": {
    //   const todoIndex = state.todos.findIndex(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   if (todoIndex === -1) return state;
    //   return produce(state, (draft) => {
    //     draft.todos.splice(todoIndex, 1);
    //   });
    //}

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
