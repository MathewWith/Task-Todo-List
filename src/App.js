import {useEffect, useState} from 'react';
import './App.scss';
import AppHeader from './components/app-header';
import ItemAddForm from './components/item-add-form';
import TodoList from './components/todo-list';
import {URL} from './shared/const';


const App = () => {

  useEffect(() => loadData(), []);

  const [todos, setTodos] = useState([])
  const [itemToEdit, setItemToEdit] = useState({})


  const updateItem = async (item) => {
    try {
      const updatedItem = await (await fetch(`${URL}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })).json()
      const updatedTodos = [...todos.filter(todo => todo.id !== updatedItem.id)]
      setTodos([...updatedTodos, updatedItem])
    } catch(err) {
      console.log(err);
    }
  }
  
  

  const getTodos = (isCompleted) => {
    return todos.filter(todo => todo.completed === isCompleted).sort((todo, nexTodo) => todo.id - nexTodo.id)
  }

  const editItem = (item) => {
    return console.log(item)
  }


  const createTodoItem = async (title) => {
    const response = await fetch(`${URL}`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed: false,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json()
    }

  const loadData = async () => {
  try {
    const data = await fetch(`${URL}`)
    const data2 = await data.json()
    setTodos(data2)
  } catch(err) {
    console.log(err);
    }  
  }

  const deleteItem = async (id) => {
    try {
      await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(todo => todo.id !== id))
    } catch(err) {
      console.log(err);
    }
  } 

  const  setNewTodo = async (value) => {
    const newItem = await createTodoItem(value)
    const newArray = [...todos, newItem]
    setTodos(newArray)
  }
  

  return (
        <div className="App">
          {}
          <AppHeader />
          <ItemAddForm  setNewTodo={setNewTodo} 
                        todos={todos} 
                        itemToEdit={itemToEdit} updateItem={updateItem}/>
          <div className="container">
            <TodoList todos={getTodos(false)}
                      deleteItem={deleteItem}
                      updateItem={updateItem}
                      editItem={editItem}
                      setItemToEdit={setItemToEdit}
                      editable={false}
                      className="todo-list"/>
            <TodoList todos={getTodos(true)}
                      updateItem={updateItem}
                      deleteItem={deleteItem}
                      editable={true}
                      className="todo-list-done"/>
          </div>
        </div>
      );
//side naw(боковая панель), туду лист, туду-лист-айтем, хедр, апп
}

export default App;
