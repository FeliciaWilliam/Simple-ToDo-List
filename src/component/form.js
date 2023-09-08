
import React from "react";

const Form=({inputText,setInputText,todos,setTodos,setStatus})=>{
  const inputTextHandler = (e) =>{
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) =>{
    e.preventDefault();
    setTodos([...todos, {text:inputText, completed:false, id:Math.random()*1000}])
    setInputText("");
  }
  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }
    return(
    <form>
      <table>
        <tr>
          <td colspan="3"><input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" /></td>
        </tr>
       <tr>
        <td colspan="3">
          <button onClick={submitTodoHandler} className="todo-button" type="submit">Add New Task</button>
        </td>
       </tr>
       <tr>
        <td colspan="3">
          <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Done</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </td>
       </tr>
      </table>
    </form>
    );
}

export default Form;