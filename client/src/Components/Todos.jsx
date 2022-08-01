import axios from "axios";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { addTodo } from "../Redux/actions";

export const Todos = () => {
    const [text, setText] = useState("");
    const todos = useSelector(store => store.todos);

    const [info, setInfo]=useState([])
  

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = () => {
        axios.get("http://localhost:2345/hi/todos")
        .then((res) => {
        setInfo(res.data.todos)
           
        })
    }

    const addTodos = () => {
        axios.post("http://localhost:2345/hi/todo", {
            title: text
        }).then(() => { getTodos() });
    }

    const deleteTodo=()=>{
        axios.delete("http://localhost:2345/hi/delete").then(()=>{getTodos()})
    }


    return (
    <div>
        <input type="text"  onChange={(e) => { setText(e.target.value) }} />
        <button onClick={() => { addTodos() }}>Add Todos</button>
        <div>
            {info.map((e) => <div>{e.title} <button onClick={()=>{deleteTodo()}}>delete</button>
            </div>)}
        </div>
    </div>);
}