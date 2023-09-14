import {PhoneBackground} from './PhoneBackground'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSeach';
import { TodoList } from './Todolist';
import { TodoItem } from './Todoitem';
import {CreateTask} from './CreateTask';
import React from 'react';
import Contenedor from './Contenedor';

// const defaultTodos=[
//  {text:'Cortar cebolla', completed: false , mision: 'secondary'},
//   {text:'Tomar Curso de intro a react.js', completed: false , mision:'main' },
//   {text:'Llorrar con la llorona', completed: false, mision: 'secondary'},
//   {text:'LAALALALA', completed: false, mision:'secondary'},
//   {text:'Completar Estados', completed: false, mision: 'main'}
// ]

// localStorage.setItem('TODOS_v1',JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_v1',defaultTodos')

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;
  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue,setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const [checkmision, setCheckMision] = React.useState(1);

  const [ButtonState,setButtonstate] = React.useState('all');
  const categoryTodos = todos.filter(todo => todo.mision === ButtonState)
  console.log(ButtonState);
  console.log(categoryTodos);

  function categoryvalidator(ButtonState){
    if (ButtonState === 'all') {
      return todos
    } else {
      return categoryTodos
    }
  } 
  
  const saveTodos = (newTodos) =>{
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  };

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <>
      <Contenedor>
        <PhoneBackground>
            <TodoCounter 
              completed={completedTodos}
              total = {totalTodos}
            />
            <TodoSearch 
              stateButton = {ButtonState}
              setButtonstate = {setButtonstate}
            >

              <TodoList>
                
                {categoryvalidator(ButtonState).map(todo =>(
                  
                  <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  misionCheck={checkmision}
                  checked={checkmision === 1}
                  onComplete = {() => completeTodo(todo.text)}
                  onDelete = {() => deleteTodo(todo.text)}

                  />
                ))}
              </TodoList>
            </TodoSearch>
          </PhoneBackground>
          <CreateTask />
      </Contenedor>
        
      
    </>
  ); 
}



export default App;
