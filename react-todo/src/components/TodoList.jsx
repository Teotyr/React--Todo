import React, {useState} from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
const TodoList = ({ todos, setTodos, setEditTodo, filteredTodos }) => {

  // const [filteredList, setFilter] = useState(...todos)
  // const filteredTodos = [...todos]
  const completeHandler = (todo) => {
    setTodos(
      todos.map((item) => {  // her bir listeyi todo adında alıyorum ve map ile içindekilere bakıyorum.
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editHandler = ( {id} ) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };


  const deleteHandler = ( {id} ) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (
    <div className="container">
      {filteredTodos.map((todo) => (  // her bir list itemini görebilmek için todo objesini gönderiyorum.
        <li className="list-item" key={todo.id}>

          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" :"" }`}
            onChange={(event) => event.preventDefault()}
          />


          
          <div>
            
            <IconButton
              className="button-complete task-button"
              onClick={() => completeHandler(todo)}>
                <CheckCircleOutlineIcon/>
            </IconButton>
            <IconButton className="button-edit" onClick={() => editHandler(todo)}>
              <EditIcon/>
            </IconButton>
            <IconButton className="button-delete" onClick={() => deleteHandler(todo)}>
              <DeleteIcon/>
            </IconButton>
          </div>
        </li>
      ))}
    </div>
  );
};
export default TodoList;
