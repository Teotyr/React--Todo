import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
 //import Select from '@mui/material/Select';
 //import MenuItem from '@mui/material/MenuItem';
 import NativeSelect from '@mui/material/NativeSelect';
import { useEffect } from "react";

const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo, setStatus}) => {


  const updateTodo = (title, id, completed) => {

    const newTodo = todos.map((todo) =>


      todo.id === id ? { title, id, completed } : todo);



    setTodos(newTodo);
    setEditTodo("");
  };



  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);




  const onInputChange = (event) => {
    setInput(event.target.value);
  };



  const onFormSubmit = (event) => {
    event.preventDefault(); //Ekle butonuna basıldığı zaman sayfanın refresh atmaması için bir fonksiyon yazdım.
    if (!editTodo) {
      setTodos([...todos,{ title: input, completed: false, id: Math.random() },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };



  const  statusHandler = (e) => {

    setStatus(e.target.value);
  }


  return (
    <form onSubmit={onFormSubmit}>
      
      <TextField id="outlined-basic" label="..Todo Giriniz.."  //inputun içine yazılan veriyi ekrana yazdırmak için inputa value değerini ekledim ve veriyi value kısmında tutarak ekrana yazdırmak istiyorum.
        type="text"
        placeholder="..Todo Giriniz.."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <Button className="button-add" type="submit" color="success" variant="contained" endIcon={<CheckCircleOutlineIcon />}>
        {editTodo ? "Güncelle" : "Ekle"}
      </Button> 
        <div className="select">
        <NativeSelect 
          label="filter"  className="filter-todo" onChange={statusHandler}>
                    <option  value="Hepsi">Hepsi</option >
                    <option  value="Tamamlandı">Tamamlandı</option >
                    <option  value="Tamamlanmadı">Tamamlanmadı</option >
                </NativeSelect>
        </div>
    </form>
  );
};

export default TodoForm;
