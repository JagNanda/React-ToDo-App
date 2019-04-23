import React from 'react';

const ListItem = (props) => {

    return (
        <div className={props.item.complete ? "todo todo-complete" : "todo"}>
            <p className="itemName">{props.item.name}</p> 
            <button className="btn btn--link" onClick={() => props.handleRemoveItem(props.item.name)}>
                Remove
            </button>
            <button
                name={props.item + "btn"} 
                onClick={() => props.handleMarkComplete(props.item.name)}
                className="btn btn--link"
            >
                {props.item.complete ? 'Mark Incomplete' : 'Complete'}
            </button>
        </div>
    )
}

export default ListItem;