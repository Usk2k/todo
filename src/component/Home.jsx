import "./../styles/home.css";
import { useState } from "react";

const Home = () => {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [inputAge, setInputAge] = useState();
  const [name, setName] = useState();

  function AddList(event) {
    event.preventDefault();
    setInputValue(event.target.newListName.value);
    setInputValue(event.target.newListAge.value);

    console.log(event.target.newListName.value);
  }

  function handleRemove(index) {
    lists.splice(index, 1);
    setLists([...lists]);
  }
  // function handleEdit(index) {
  //   lists.setUpdate(index, 1);
  //   setLists([...lists]);
  // }
  function addTodo() {
    setLists([...lists, inputValue, inputAge]);
  }

  return (
    <div className="home">
      <div className="App"></div>
      <form onSubmit={AddList}>
        <input
          className="listInput"
          type="text"
          name="newListName"
          placeholder="Name"
        />
        <input
          className="listInput"
          type="text"
          name="newListAge"
          placeholder="age"
        />
        <input
          className="listInput"
          type="text"
          name="newListScore"
          placeholder="score"
        />

        <button className="addBtn" type="submit" onClick={addTodo}>
          add player
        </button>
      </form>
      <ul>
        {lists.map((list, index) => (
          <div>
            <li className="list" key={index}>
              {list}{" "}
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
              <tr>
                <td>
                  {name}
                  {list}
                </td>
              </tr>
              ;
              <button
                className="removeBtn"
                type="button"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </li>

            {/* <button type="button" onClick={() => handleEdit(index)}>
              Edit
            </button> */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
