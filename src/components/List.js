import React from 'react';
import ListItem from './ListItem.js';

const List = (props) => {
    return (
        <div className="listContainer">
            <div className="listContainer--Header">
                <div className="listContainer--Header-title">Your ToDo List: </div>
                <button className="btn btnRemoveAll" onClick={props.handleRemoveAllItems}>Remove All Items</button>
            </div>
            {props.listItems.length == 0 && <div className="todo todo--start-msg">Please add a toDo item below to get started!</div>}
            {props.listItems.map((item) => (
                <ListItem 
                    item={item} 
                    key={item.name}
                    handleRemoveItem={props.handleRemoveItem}
                    handleMarkComplete={props.handleMarkComplete}
                />
            ))}
        </div>
    )
}

export default List;