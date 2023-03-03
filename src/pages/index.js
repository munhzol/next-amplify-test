import { useContext, useEffect, useState } from "react";

import { TodoContext } from "todo/context";

// import { API, graphqlOperation } from "aws-amplify";

const App = () => {
  // const {
  //   state: { coffeeStores },
  // } = useContext(TodoContext);

  const [todo, setTodo] = useState("");

  const {
    state: { todos },
    dispatch,
  } = useContext(TodoContext);

  const add = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: todo });
    setTodo("");
    console.log(todos);
  };

  return (
    <>
      <header>
        <h2>To Do List</h2>
      </header>
      <main>
        <section>
          <form onSubmit={add}>
              <label>
                Todo:{" "}
                <input onChange={(e) => setTodo(e.target.value)} value={todo} />
              </label>
            <button type="submit">Add</button>
          </form>
        </section>
        <section>
          <h2>Things todo</h2>
          <ul>
            {todos.map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
          </ul>
        </section>
      </main>
    </>
  );
};
export default App;
