import { useState } from "react"

export const TodoList = () => {
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState(['im here','IM not here'])
    const [isFocused, setIsFocused] = useState (false)
    console.log(inputValue)
    console.log(todoList)

    const fruit = ['apple','mango','banana']
    const maptry= fruit.map((item,index) => {return (item+index)})
    console.log(maptry)

    const filtert= fruit.filter((item,index) => {return index!=1})
    console.log(filtert)


    return (<>
        <h1>TODO List</h1>
        <input 
          type="text" 
          placeholder={isFocused ? "": "Whats ur plan next~"} 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={()=>setIsFocused(true)}
          onBlur={()=>setIsFocused(false)}
          onKeyDown={(e) => {if(inputValue.trim()!=='' && e.key==="Enter"){
            setTodoList([...todoList, inputValue])
            setInputValue('')
            }}}
          > 
        </input>
        <button onClick={() => {
            if(inputValue.trim()!==''){
            setTodoList([...todoList, inputValue])
            setInputValue('')
            }
        }
            }>Confirm</button>
    {
      todoList.map((item,index) => {
      return (<div>
        事件{index+1}.--{item}
        <button onClick={() => {
            setTodoList(todoList.filter((item,currentItemIndex) => currentItemIndex!==index))
        }
            }>Delete</button>
        </div>)})
    }
    </>)
}