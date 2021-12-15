import React from "react";
import TodoListItem from "../todo-list-item";

export const TodoList = ({todos, editable, deleteItem, updateItem, editItem, setItemToEdit}) => {

    const classesWrap = editable ? "list-wrapper-done" : "list-wrapper";
    const classes = editable ? "todo-list-done" : "todo-list";
   
    const element = todos.map((item) => {
        return(
            <li className="list-group-item" key={item.id}>
                <TodoListItem 
                    item={item}
                    title={item.title} 
                    deleteItem={deleteItem}
                    completed={item.completed}
                    updateItem={updateItem}
                    editItem={editItem}
                    setItemToEdit={setItemToEdit}
                    /> 
            </li>
        )
    })

    return (
        <div className={classesWrap}>
            { editable 
                    ? <span className="todo-total">Completed({todos.length})</span>
                    : <span className="todo-total">To do({todos.length})</span>
            }
            <ul className={classes}>
            
                {
                element
                }
            </ul>
        </div>
    )
}