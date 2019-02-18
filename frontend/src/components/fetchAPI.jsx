import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {dogs} from "../actions";
import './App.css';



class fetchAPI extends Component {

    //runs this after this component mounts
    componentDidMount() {

    }

    state = {
        text: "",
        updateDogId:null,
    }

    resetForm = () => {
        this.setState({text: "", updateDogId: null});
    }

    selectForEdit = (id) => {
        let dog = this.props.dogs[id];
        this.setState({text: dog.text, updateDogId: id});
    }

    submitDog = (e) => {
        e.preventDefault();
        if (this.state.updateDogId === null) {
            this.props.addDog(this.state.text);
        } else {
            this.props.updateDog(this.state.updateDogId, this.state.text);
        }
        this.resetForm();
    }
    render() {
        return (
            <div>
                <h2>Welcome to YMIM!</h2>
                <hr />

                <h3>Dogs</h3>
                <table>
                    <tbody>
                        {this.props.dogs.length > 0 && this.props.dogs.map((dog, id) => (
                            <tr key={`dog_${id}`}>
                                <td><Link to="/doggy"><img src={dog.text} alt={dog.text}></img></Link></td>
                                <td><button onClick={() => this.selectForEdit(id)}>edit</button></td>
                                <td><button onClick={() => this.props.deleteDog(id)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Add new dog</h3>
                <button onClick={() => this.props.fetchDog(1)}>Get Dog</button>
                <form onSubmit={this.submitDog}>
                    <input
                        value={this.state.text}
                        placeholder="Enter dog here..."
                        onChange={(e) => this.setState({text: e.target.value})}
                        required />
                    <input type="submit" value="Save Dog" />
                    <button onClick={this.resetForm}>Reset</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dogs: state.dogs,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addDog: (text) => {
            return dispatch(dogs.addDog(text));
        },
        updateDog: (id, text) => {
            return dispatch(dogs.updateDog(id, text));
        },
        deleteDog: (id) => {
            return dispatch(dogs.deleteDog(id));
        },
        fetchDog: (num) => {
            dispatch(dogs.fetchDogs(num));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(fetchAPI);