import React from 'react'
import "./Style.css"
import { Todo } from "../model";
import SingleToDo from './SingleToDo';

interface props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList : React.FC<props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo)=>(
          <SingleToDo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/> 
        ))}
    </div>
  )
}

export default TodoList