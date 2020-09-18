import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addNew = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="container">
      <div className="form">
        <input
          placeholder="Write  Note"
          value={todo}
          onChange={handleChange}
        ></input>
        <button onClick={addNew}>Add</button>
      </div>

      <div className="list">
        {todos.map((item, index) => (
          <div key={index} className="list-item">
            <p>{item}</p>
            <button onClick={() => setTodos(todos.filter((el) => el !== item))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
