// import React from "react";
// //import { useState } from "react";
// function Todo({ text, todos, setTodos, todo, setEditTodo }) {

//   // const updateTodo = (e) => {
//   //   e.preventDefault();
//   //   setTodos([
//   //     ...todos,
//   //     {text: inputText, completed: false}
//   //   ])
//   //   setInputText("");
//   // }

// //   const inputTextHandler = (e) => {
// //     //inputun içine yazılan verinin yazdırılması için setInputText kullandım.
// //     setInputText(e.target.value);
// //   };

// // const updateHandler = (e) => {
  
// //     setTodos(todos.filter((value)=> value.id === todo.id))
// //     setTodos([
// //       ...todos,
// //       {text: setInputText}
// //     ])
// //       console.log(todos)
// //const [todos, setTodos] = useState("")


// const editHandler = () => {
//   const findTodo = todos.find((e)=> e.id === todo.id)
//   setTodos(findTodo);
// }


// const deleteHandler = () => {
//     setTodos(todos.filter((e) => e.id !== todo.id));
//     //console.log(todos);
//   };



//   const completeHandler = () => {
//     setTodos(
//       todos.map((item) => {
//         if (item.id === todo.id) {
//           return { ...item, completed: !item.completed };
//         }
//         return item;
//       })
//     );
//   };
  
//   return (
//     <div className={`todo ${todo.completed ? "completed" : ""}`}>
//       <button className="complete-btn" onClick={completeHandler}>
//         Complete
//       </button>
//       <li className="todo-item">{text}</li>
//       <button className="trash-btn" onClick={deleteHandler}>
//         Delete
//       </button>
//       <button className="update-btn" onClick={()=> editHandler(todo)} >Update</button>
//     </div>
//   );
// }

// export default Todo;
