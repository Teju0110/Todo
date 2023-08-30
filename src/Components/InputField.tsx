import "./Style.css"
import React,{useRef} from "react"

interface props {
    todo : string,
    setTodo :React.Dispatch<React.SetStateAction<string>>
    handleAdd : (e:React.FormEvent)=>void 
   }

const InputField:React.FC<props>= ({todo,setTodo,handleAdd}) => {
   const inputRef= useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{handleAdd(e); inputRef.current?.blur()}} >
        <input type="input" ref={inputRef} placeholder='Enter a Task' className='input__box' onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        <button className='input_submit' type='submit'>ADD</button>
    </form>
  )
}

export default InputField