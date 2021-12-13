import React from "react";
import TodoListItem from "../todo-list-item";

export const TodoList = ({todos, editable, deleteItem, updateItem}) => {

    const classes = editable ? "todo-list-done" : "todo-list"; 
  
    // const elementDone = (item) => {
    //     return (
    //         <li className="list-group-item" key={item.id}>
    //             <TodoListItemDone 
    //                 item={item.title}
    //                 id={item.id}
    //                 deleteItem={deleteItem}
    //             />
    //         </li>
    //     )
    // }

    // const element = (item) => {
    //     return(
    //         <li className="list-group-item" key={item.id}>
    //             <TodoListItem 
    //                 item={item.title} 
    //                 id={item.id} 
    //                 key={item.id} 
    //                 deleteItem={deleteItem}
    //                 completed={item.completed}
    //                 // saveIndexForEdit={saveIndexForEdit}
    //                 /> 
    //         </li>
    //     )
    // }


    // const elementDone1 = todos.map((item) => {
    //     return (
    //         <li key={item.id}>
    //             <TodoListItemDone 
    //                 title={item.title}
    //                 id={item.id}
    //                 deleteItem={deleteItem}
    //             />
    //         </li>
    //     )
    // })

   
    const element = todos.map((item) => {
        return(
            <li className="list-group-item" key={item.id}>
                <TodoListItem 
                    item={item}
                    title={item.title} 
                    deleteItem={deleteItem}
                    completed={item.completed}
                    updateItem={updateItem}
                    /> 
            </li>
        )
    })

    return (
            <ul className={classes}>
                { editable 
                ? <span className="todo-total">Completed({todos.length})</span>
                : <span className="todo-total">To do({todos.length})</span>}
                {
                element
                }
            </ul>
    )
}