import React from 'react';
import './todoitem.css'
import Botonclear from './assets/botonclear.png'
function TodoItem(props){
   
    return (
    <li>
        <div className='typecolor'></div>
        <input type = 'radio' className={`Icon  ${props.completed && "Icon-check"}`} onClick = {props.onComplete} ></input >
        <container className={`contenido ${props.completed && "contenido-p-completed"}`}> 
            <p>{props.text}</p>
        
            <div className='tasktext'>
                <p>{props.completed ? '1' : '0'}/{props.misionCheck}</p>
                <p id='hastag'>#Dave #Mision</p>
            </div>
       
        </container>
        <div className='SeparateButton'>
            <button className='clearbutton' onClick={props.onDelete}>
                <img src={Botonclear}></img>
            </button>
        </div>
       
    </li>
    ); 
}

export {TodoItem}