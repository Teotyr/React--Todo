import "./App.css";
import Header from "./components/Header"
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];   // inputta yazılan verilerin input ile alacağım değiştirmek istersem de setInput ile yapacağım
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(initialState) /////////////////////////////////
  const [editTodo, setEditTodo] = useState(null)
  const [status, setStatus] = useState("Hepsi")
  const [filteredTodos, setFilteredTodos] = useState([])


  useEffect(() => {
    filterHandler(todos);
  }, [todos],[status])

  
  const filterHandler = () => {
    setFilteredTodos(todos.filter((todo)=>
      status === "Hepsi" ? 
      todo.completed || !todo.completed: 
      status === "Tamamlandı" ?
      todo.completed :
      !todo.completed))
  }




  useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
},[todos])
//formlara props olarak yolluyorum
  return (
    <div className= "container" >
      <div className="app-wrapper">
        <div>  
          <Header/>
        </div>
        <TodoForm
        input = {input}
        setInput = {setInput}
        todos= {todos}
        setTodos = {setTodos}
        editTodo = {editTodo}
        setEditTodo={setEditTodo}
        setStatus= {setStatus}
        />
        <div>
        <TodoList 
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
        filteredTodos= {filteredTodos}  />
        </div>
      </div>
    </div>
  )
}

export default App