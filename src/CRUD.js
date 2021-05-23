import React from "react";
import "./CRUD.css"

class CRUD extends React.Component {
    newItems;
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()

            }
        })
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem)
        if (newItem.text!==""){
            const items=[...this.state.items, newItem];
            this.setState({
                items:newItem,
                currentItem:{
                    text:'',
                    key:''
                }

            })
        }
    }

    render() {
        return (
            <div>
                <header>
                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter text"
                               value={this.state.currentItem.text}
                               onChange={this.hanleInput}/>
                        <button type="submit">Add new car</button>
                    </form>
                </header>
            </div>
        )
    }
}

export default CRUD;