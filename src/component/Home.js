import "./../styles/home.css";
import { useState } from "react";

const Home = () => {
  // const [name, setName] = useState("mario");
  // const [age, setAge] = useState(25);
  // const handleClick = () => {
  //   setName("luigi");
  //   setAge(30);
  // };
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState();

  function AddList(event) {
    event.preventDefault();
    setInputValue(event.target.newListName.value);
    console.log(event.target.newListName.value);
  }

  function handleRemove(index) {
    lists.splice(index, 1);
    setLists([...lists]);
  }
  function handleEdit(index) {
    lists.setUpdate(index, 1);
    setLists([...lists]);
  }
  function addTodo() {
    setLists([...lists, inputValue]);
  }
  return (
    <div className="home">
      <form onSubmit={AddList}>
        <input type="text" name="newListName" />

        <button type="submit" onClick={addTodo}>
          add
        </button>
      </form>
      <ul>
        {lists.map((list, index) => (
          <div>
            <li key={index}>{list}</li>

            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
            <button type="button" onClick={() => handleEdit(index)}>
              Edit
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
