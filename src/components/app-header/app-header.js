import React from "react";
import notebook from "../../assets/image/notebook.png"
import user from "../../assets/image/user.png"
import checkMark from "../../assets/image/check-mark.png"

export const AppHeader = () => {
    return (
        <div className="app-header">
            <div className="app-header__wrapper">
                <div className="app-header__wrapper-left">
                    <div className="app-header__left-icon">
                        <img src={notebook} alt="notebook" className="icon-left"/>
                        <p className="sign">To-Do</p>
                    </div>
                    <div className="app-header__left-name">
                        <span className="">Tasks</span>
                    </div>
                </div>
                <div className="app-header__wrapper-right">
                    <span>Leanne Graham </span>
                    <img src={user} alt="user"/>
                    <img src={checkMark} alt="check mark"/>
                </div>
            </div>
        </div>
    )
}