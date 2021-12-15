import React, {useState, useEffect} from "react";

export const ItemAddForm = ({todos, setNewTodo, itemToEdit, updateItem}) => {
    const [value, setValue] = useState("")

    useEffect( () => setValue(itemToEdit.title), [itemToEdit] );

    const todoTotalOnList = (todos) => {
        return todos.length
      }

    const onSubmit = async (e) => {
        e.preventDefault();
        itemToEdit?.id ? await updateItem({...itemToEdit, title: value}) : await setNewTodo(value) 
        setValue('')
    }
    
        return (
            <form className="item-add-form"
                onSubmit={onSubmit}>
                <input 
                    type="text"
                    className="item-add-form__input"  
                    placeholder="+ Add a task, press Enter to save"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />
                <button className="btn-input">{itemToEdit?.id ? "Save" : "Add" }</button>
                <span className="todo-total">Total: {todoTotalOnList(todos)}</span>
            </form>
        )
}