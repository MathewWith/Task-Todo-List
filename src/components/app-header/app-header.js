import React from "react";
import {BsFillBagCheckFill} from "react-icons/bs"

export const AppHeader = () => {
    return (
        <div className="app-header">
            <BsFillBagCheckFill className="icon-left"/>
            <div className="right">
                <span className="">Tasks</span>
            </div>
            <div className="left-panel"><img src="../todo-list-item/image/Vector.png"/><label /></div>
        </div>
    )
}