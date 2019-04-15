import React, { Component } from 'react';
import { connect } from 'react-redux';
import { events } from "../actions";
import EventForm from '../components/EventForm';
import './event.css';

class Events extends Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

    state = {
        text: "",
        updateEventId: null,
        title: "",
        description: "",
        start_time: "",
        end_time: null,
        event_image: ""

    }

    resetForm = () => {
        this.setState({ title: "", description: "", updateEventId: null });
    }

    submitEvent = (e) => {
        e.preventDefault();
        if (this.state.updateEventId === null) {
            this.props.addEvent(this.state.title, this.state.description, this.state.start_time).then(this.resetForm)
        } else {
            this.props.updateEvent(this.state.updateEventId, this.state.text).then(this.resetForm);
        }
    }

    render() {
        return (
            <div>
                <h1 >Current Events</h1>
                {/* <table>
                    <tbody>
                        {this.props.events.map((event) => (
                            <tr key={`event_${event.id}`}>
                                <td>{event.title}</td>
                                <td>{event.description}</td>
                                <td>{event.start_time}</td>
                                <td>to</td>
                                <td>{event.end_time}</td>
                                <td>{event.event_image}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}


                <div>
                    {this.props.events.map((event) => (
                        <div className='tbody' key={`event_${event.id}`}>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p>{event.start_time}</p>
                            <p>to</p>
                            <p>{event.end_time}</p>
                            <p>{event.event_image}</p>
                            <button className="btn btn-info">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    ))}
                </div>

                <EventForm
                    submitEvent={this.submitEvent}
                    title={this.state.title}
                    description={this.state.description}
                    startTime={this.state.start_time}
                    endTime={this.state.end_time}
                    eventImage={this.state.event_image}
                    changeTitle={(e) => this.setState({ title: e.target.value })}
                    changeDescription={(e) => this.setState({ description: e.target.value })}
                    changeStime={(e) => this.setState({ start_time: e.target.value })}
                    changeEtime={(e) => this.setState({ end_time: e.target.value })}
                    changeImage={(e) => this.setState({ event_image: e.target.value })} />
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.events,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => {
            dispatch(events.fetchEvents());
        },
        addEvent: (text, title, description, start_time, end_time, event_image) => {
            return dispatch(events.addEvent(text, title, description, start_time, end_time, event_image));
        },
        updateEvent: (id, text) => {
            return dispatch(events.updateEvent(id, text));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Events);
