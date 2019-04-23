import React from 'react';
import Header from './Header.js';
import List from './List.js';
import AddListItem from './AddListItem.js';
import 'normalize.css/normalize.css';

class ToDoApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddListItem = this.handleAddListItem.bind(this);
        this.handleRemoveAllItems = this.handleRemoveAllItems.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleMarkComplete = this.handleMarkComplete.bind(this);
        this.state = {
            listItems: [],
            errorMessage: ""
        }
    }

    componentDidMount() {
        try{
            const listItems = JSON.parse(localStorage.getItem("listItems"));

            if(listItems)
            {
                this.setState(() => {
                    return {
                        listItems: listItems
                    };
                });
            }
        } 
        catch(e) {
            console.log(e);
        }
    }

    componentDidUpdate() {
        localStorage.setItem("listItems",JSON.stringify(this.state.listItems));
    }

    handleAddListItem(itemToAdd) {
        if(this.state.listItems.findIndex((item) => item.name==itemToAdd.name) > -1) {
            this.setState(() => {
                return {
                    errorMessage: "That item is already on the list"
                };
            });
        }
        else if(!itemToAdd.name) {
            this.setState(() => {
                return {
                    errorMessage: "You didn't add anything"
                }
            })
        }
        else {
            const newList = this.state.listItems.concat(itemToAdd);
            this.setState((prevState) => {
                return {
                    listItems: newList,
                    errorMessage: ""
                };
            });
        }
    }

    handleMarkComplete(itemToMark) {
        const index = this.state.listItems.findIndex((item) => item.name == itemToMark);
        if(this.state.listItems[index].complete == false) {
            this.state.listItems[index].complete = true;
            localStorage.setItem("listItems",JSON.stringify(this.state.listItems));
            this.setState(() => {
                return {
                    itemList: this.state.itemList
                }
            })
        }
        else {
            this.state.listItems[index].complete = false;
            localStorage.setItem("listItems",JSON.stringify(this.state.listItems));
            this.setState(() => {
                return {
                    itemList: this.state.itemList
                }
            })
        }
    }

    handleRemoveItem(itemToRemove) {
        const listItemsCopy = this.state.listItems;
        const index = listItemsCopy.findIndex((item) => item.name == itemToRemove);
        listItemsCopy.splice(index, 1);
        this.setState(() => {
            return {
                itemList: listItemsCopy
            }
        })
    }

    handleRemoveAllItems() {
        this.setState(() => {
            return {
                listItems: []
            };
        });
    }

    render() {
        return(
            <div>
                <Header></Header>
                <div className="container">
                    <List 
                        listItems={this.state.listItems} 
                        handleMarkComplete={this.handleMarkComplete}
                        handleRemoveAllItems={this.handleRemoveAllItems}
                        handleRemoveItem={this.handleRemoveItem}
                    />
                    <AddListItem 
                        listItems={this.state.listItems} 
                        handleAddListItem={this.handleAddListItem}  
                        errorMessage={this.state.errorMessage}      
                    />
                </div>
            </div>
        )
    }

}

export default ToDoApp;