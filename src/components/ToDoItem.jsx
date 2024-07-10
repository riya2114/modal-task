import React from 'react';
import styles from './ToDoItem.module.css';

const ToDoItem = ({task, handleRemove}) => {
  return (
    <>
      <ul className={styles.addList}>
        {task.map((tasks, index)=>(
          <li className={styles.task}>{tasks}
            <button onClick={()=>handleRemove(index)}>remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ToDoItem;

