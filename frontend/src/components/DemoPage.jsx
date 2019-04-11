import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { items } from "../actions";
import './home.css';



class DemoPage extends Component {

    //runs this after this component mounts
    componentDidMount() {

    }

    state = {
        text: "",
        updateItemId: null,
    }

    resetForm = () => {
        this.setState({ text: "", updateItemId: null });
    }

    selectForEdit = (id) => {
        let item = this.props.items[id];
        this.setState({ text: item.text, updateItemId: id });
    }

    submitItem = (e) => {
        e.preventDefault();
        if (this.state.updateItemId === null) {
            this.props.addItems(this.state.text);
        } else {
            this.props.updateItem(this.state.updateItemId, this.state.text);
        }
        this.resetForm();
    }
    render() {
        return (
            <div>
                <h2>Welcome to YMIM!</h2>
                <hr />

                <h3>Items</h3>
                <table>
                    <tbody>
                        {this.props.items.length > 0 && this.props.items.map((item, id) => (
                            <tr key={`item_${id}`}>
                                <td><Link to="/items"><img className="small_img" src={item.text} alt={item.text}></img></Link></td>
                                <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
                                <td><button onClick={() => this.props.deleteItem(id)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Add new Item</h3>
                <button onClick={() => this.props.fetchItem(1)}>Get Item</button>
                <form onSubmit={this.submitItem}>
                    <input
                        value={this.state.text}
                        placeholder="Enter item here..."
                        onChange={(e) => this.setState({ text: e.target.value })}
                        required />
                    <input type="submit" value="Save Item" />
                    <button onClick={this.resetForm}>Reset</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addItems: (text) => {
            return dispatch(items.addItem(text));
        },
        updateItem: (id, text) => {
            return dispatch(items.updateItem(id, text));
        },
        deleteItem: (id) => {
            return dispatch(items.deleteItem(id));
        },
        fetchItem: (num) => {
            dispatch(items.fetchItems(num));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);