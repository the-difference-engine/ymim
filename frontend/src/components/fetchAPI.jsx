import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';


class fetchAPI extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to YMIM!</h2>
                <hr />

                <h3>Dogs</h3>
                <table>
                    <tbody>
                        {this.props.dogs.map(dog => (
                            <tr>
                                <td><Link to="/doggy"><img src={dog.url}></img></Link></td>
                                <td><button>edit</button></td>
                                <td><button>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(fetchAPI);