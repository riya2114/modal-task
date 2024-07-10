import React, { useState } from 'react'
import styles from './ModalToDo.module.css';
import ToDoItem from './ToDoItem';

const ModalToDo = () => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState('');

    const handleTask = () =>{
        if(input.trim()){
            setTask([...task, input])
            setInput('');
        }
    }
    const remove = (index) =>{
      const newTask = task.filter((_,taskIndex)=>taskIndex!==index);
      setTask(newTask)
    }
  return (
    <>
      <h1 className={styles.heading}>To Do List</h1>
      <div className={styles.inputField}>
          <input type='text' placeholder='enter item..' value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={handleTask}>Add</button>
      </div>
      <ToDoItem task={task} handleRemove={remove}/>
    </>
  )
}

export default ModalToDo;
