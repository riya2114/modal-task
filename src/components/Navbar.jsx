import React, { useState } from 'react';
import styles from './Navbar.module.css';
import ModalToDo from './ModalToDo';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleButton = () =>{
        setShow(!show);
    }
  return (
    <>
      <nav className={styles.navbar}>
        <h1>To Do List</h1>
        <button onClick={handleButton}>Modal</button>
      </nav>
      {show && <ModalToDo/>}
    </>
  )
}

export default Navbar;
