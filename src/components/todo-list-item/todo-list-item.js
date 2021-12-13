/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import edit from "../../assets/image/edit.png";
import basket from "../../assets/image/Layer.png";
import copy from "../../assets/image/copy.png"

export const TodoListItem = ({item, title, completed, deleteItem, updateItem}) => {
    const className = "todo-list-item"
    return (
        <span className={className}>
               <span className="title">
                   <input type="checkbox" defaultChecked={completed} onClick={() => updateItem(item)}/>
                   {" " + title}
                </span>
            <div className="btn-grope">
                { 
                    completed 
                        ? null 
                        : <img  src={edit} 
                                className="image" 
                                alt="edit" 
                                className="btn-edit" 
                                onClick={() => {}}/> 
                }

                <link rel="icon" type="image/gif"  href={copy}/>
                <i className="fa fa-play"></i>
                { completed ? null : <img src={copy} alt="copy"/> }
                <img src={basket} alt="basket" onClick={() => deleteItem(item.id)} className="btn-delete"/>
            </div>
        </span>
    )
}

//icons , assets 
//item, id, completed, весь объект в edit функция