import {useEffect, useState } from 'react';
import './App.scss';
import AppHeader from './components/app-header';
import ItemAddForm from './components/item-add-form';
import TodoList from './components/todo-list';
// setTodos(JSON.parse(json)
const App = () => {
  let maxId = 200;
  let userId = 10;

  useEffect(() => response(), [])

  const [todos, setTodos] = useState([])

  const createTodoItem = (title) => {
      return {
        title,
        completed: false,
        id: maxId++,
        userId: userId++
      }
    }

  const response = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => setTodos(json))}

  const deleteItem = (id) => {
    const idx = todos.findIndex((el) => el.id === id)
        const newArray = [
          ...todos.slice(0, idx),
          ...todos.slice(idx + 1)
        ]
        setTodos(newArray)
    } 

  const  setNewTodo = (value) => {
    const newItem = createTodoItem(value)
    const newArray = [...todos, newItem]
    setTodos(newArray)
  }
  

  return (
        <div className="App">
          <AppHeader />
          <ItemAddForm onClick={setNewTodo}/>
          <TodoList todos={todos} 
                    deleteItem={deleteItem}
                    editable={true||false}
                    className=""/>
        </div>
      );












  // maxId = 100;
  // state = {
  //   todoData : [
  //     this.createTodoItem("Have a breakfast"),
  //     this.createTodoItem("Drink Coffee"),
  //     this.createTodoItem("Make Awesome App"),
  //     this.createTodoItem("Have a lunch")
  //   ]
  // }

  // indexForEdit = null;

  // createTodoItem(label) {
  //   return {
  //     label,
  //     id: this.maxId++
  //   }
  // }

  // saveIndexForEdit = (idx) => {
  //   this.indexForEdit = idx;
  // }

  // deleteItem = (id) => {
  //   this.setState(({todoData}) => {
  //     const idx = todoData.findIndex((el) => el.id === id)
  //     const newArray = [
  //       ...todoData.slice(0, idx),
  //       ...todoData.slice(idx + 1)
  //     ]
  //     return {
  //       todoData: newArray
  //     }
  //   })
  // } 

  // setNewTodo = (value) => {

  //   this.setState(({todoData}) => {
  //     const newItem = this.createTodoItem(value)
  //     const newArray = [...todoData, newItem]
  //     return {
  //       todoData: newArray
  //     }
  //   })
  // }

  // componentDidUpdate() {
  //   console.log(this.indexForEdit);
  //   console.log("hi");
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <AppHeader />
  //       <ItemAddForm onClick={this.setNewTodo}/>
  //       <TodoList todos={this.state.todoData} 
  //                 deleteItem={this.deleteItem} 
  //                 saveIndexForEdit={this.saveIndexForEdit}
  //                 editable={true||false}
  //                 className=""/>
  //     </div>
  //   );
  // }
}

export default App;
// .then((response) => response.json())