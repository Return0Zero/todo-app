import React from 'react';
import './todo.css';
import EditButton from "../images/edit-button.svg";
import DeleteButton from "../images/delete-button.svg";

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className="icons">
            <img src={EditButton} alt='Edit Button' className="icon" onClick={updateMode}/>
            <img src={DeleteButton} alt='Delete Button' className="icon" onClick={deleteToDo}/>
        </div>
    </div>
  )
}

export default ToDo;