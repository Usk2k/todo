// import "./../styles/table.css";
// import { useState } from "react";
// const Table = () => {
//   const [name, setName] = useState([]);
//   const [inputValue, setInputValue] = useState();

//   // const [age, setAge] = useState();
//   // const [score, setScore] = useState();
//   function addName(event) {
//     event.preventDefault();
//     setInputValue(event.target.setName.value);
//     console.log(event.target.newAddName.value);
//   }
//   // function addAge(event) {
//   //   event.preventDefault();
//   //   setAge(event.target.setName.value);
//   // }
//   // function addScore(event) {
//   //   event.preventDefault();
//   //   setScore(event.target.setName.value);
//   // }
//   function addName() {
//     setName([...name, inputValue]);
//   }
//   return (
//     <div className="TableBody">
//       <form onSubmit={addName}>
//         <input className="nameInput" type="text" name="newAddName" />

//         <button className="addBtn" type="submit" onClick={addName}>
//           add player
//         </button>
//       </form>
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Gender</th>
//         </tr>
//         {name.map((val, index) => {
//           return (
//             <tr key={index}>
//               {val}
//               {""}
//               <td>{addName}</td>
//               {/* <td>{addAge}</td>
//               <td>{addScore}</td> */}
//             </tr>
//           );
//         })}
//       </table>
//     </div>
//   );
// };

// export default Table;
