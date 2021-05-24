import React from "react";
import "./ListСars.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ListCars(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.text} value={item.text}/>
            <span>
                <FontAwesomeIcon className="faicons" icon='trash' onClick={()=>props.deleteItem(item.key)}/>
            </span>
            </p>
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

export default ListCars;