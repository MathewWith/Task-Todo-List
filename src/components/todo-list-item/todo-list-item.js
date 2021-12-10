import React from "react";
import {RiDeleteBin6Line, RiFileEditLine} from "react-icons/ri";

export const TodoListItem = ({item, id, deleteItem, saveIndexForEdit}) => {
    const className = "todo-list-item"
    return (
        <span className={className}>
            <span className="label">{item}</span>
            <div className="btn-grope">
              <img src="image/edit.png" className="image"/>
              <RiFileEditLine className="btn-edit" onClick={() => saveIndexForEdit(id)}/>
              <RiDeleteBin6Line className="btn-delete" onClick={() => deleteItem(id)}/>
            </div>
        </span>
    )
}