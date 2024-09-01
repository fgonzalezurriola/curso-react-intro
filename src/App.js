import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';
import React from 'react';

// const defaultTodos = [
//   { text: 'Tarea de TEOCOMPU', completed: true },
//   { text: 'Tarea de RIM', completed: false },
//   { text: 'Aprender React', completed: false },
//   { text: 'Aprender Django', completed: false },
//   { text: 'Aprender Flask', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

//JSON.stringify(defaultTodos)
//JSON.parse(parsedTodos)

// Custom hook
function useLocalStorage (itemName, initialValue) {
  //usar lo que queramos en el hook

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState([parsedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return[item, saveItem];
}

function App() {


  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;
  
  const searchedTodos = todos.filter(
    todo => 
      todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <div className="App">
      <>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}

            />
          ))}
        </TodoList>
        {/* <CreateTodoButton /> */}
      </>
    </div>
  );
}


export default App;
