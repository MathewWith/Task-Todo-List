import React from "react";
import TodoListItem from "../todo-list-item";
import TodoListItemDone from "../todo-list-item-done";

export const TodoList = ({todos, deleteItem, saveIndexForEdit}) => {

    const elementDone = todos.map((item) => {
        return (
            <li key={item.id}>
                <TodoListItemDone 
                    title={item.title}
                    id={item.id}
                    deleteItem={deleteItem}
                />
            </li>
        )
    })

   
    const element = todos.map((item) => {
        return(
            <li className="list-group-item" key={todos.id}>
                <TodoListItem 
                    item={item.title} 
                    id={item.id} 
                    key={item.id} 
                    deleteItem={deleteItem}
                    // saveIndexForEdit={saveIndexForEdit}
                    /> 
            </li>
        )
    })

    return (
            <ul className="todo-list">
            <span className="todo-total">To do({todos.length})</span>
                {
                     element
                }
            </ul>
    )
}