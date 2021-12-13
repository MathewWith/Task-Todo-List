import React, {useState} from "react";

export const ItemAddForm = ({todos, onClick}) => {
    const [label, setLabel] = useState("")

    const todoTotalOnList = (todos) => {
        return todos.length
      }

    const onSubmit = async (e) => {
        e.preventDefault();
        await onClick(label)
        setLabel('')
    }
    
        return (
            <form className="item-add-form"
                onSubmit={onSubmit}>
                <input 
                    type="text"
                    className="item-add-form__input"  
                    placeholder="+ Add a task, press Enter to save"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    />
                <button className="btn-input">Add</button>
                <span className="todo-total-on-list">Total: {todoTotalOnList(todos)}</span>
            </form>
        )
}