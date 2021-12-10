import React, { Component} from "react";

export class ItemAddForm extends Component {
    state = {
        label: ""
    }

    setItem = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onClick(this.state.label)
        this.setState({
            label: ""
        })
    }

    render() {
    
        return (
            <form className="item-add-form"
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    className="item-add-form__input"  
                    placeholder="Write here"
                    value={this.state.label}
                    onChange={this.setItem}
                    />
                <button className="btn-input">Add</button>
            </form>
        )
    }
    
}