import { useState } from "react";

export const TodoListDeleteLater = () => {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState(['hi','imhere'])
  const [isFocused, setIsFocused] = useState(false)
  return (
    <>
      <h1>TODO List Delete Later</h1>
      <div><input 
        value = {inputValue}
        placeholder={isFocused ? '': 'Please write down your todo here'}
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)}
        onChange={(e)=>setInputValue(e.target.value)}
        onKeyDown={(e)=>{
            if(inputValue.trim()!=='' && e.key==="Enter"){
                setTodoList([...todoList,inputValue])
                setInputValue('')
            }
        }}
        ></input>
        <button onClick={()=>{
            if(inputValue.trim()!==''){
                setTodoList([...todoList,inputValue])
                setInputValue('')
            }
        }}>Confirm</button></div>
      {
        todoList.map((item,index)=>
        <div>
          {index}- {item}
          <button onClick={()=>
            setTodoList(todoList.filter((item,currentItemIndex)=>currentItemIndex!==index))
          }>
            Delete
          </button>
        </div>)
      }
    </> 
  )
  


}