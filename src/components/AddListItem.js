import React from 'react';

const AddListItem = (props) => {

    function handleSubmitItem(e) {
        e.preventDefault();
        const itemToAdd = {
            name: e.target.elements.itemToAdd.value.trim(),
            complete: false
        };
        e.target.elements.itemToAdd.value = "";
        props.handleAddListItem(itemToAdd);   
    }

    return (
        <div>
            {props.errorMessage && <p className="errorMsg">{props.errorMessage}</p>}
            <form onSubmit={handleSubmitItem}>
                <div className="formArea">
                    <input type="text" name="itemToAdd" className="input-text"/>
                    <button className="btn big-btn">Add ToDo</button>
                </div>
            </form>
        </div>
    )
}

export default AddListItem;