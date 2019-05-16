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
        updateEventId: null,
        title: "",
        description: "",
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: "",
        event_image: null

    }

    resetForm = () => {
        this.setState({ title: "", description: "", start_date: "", start_time: "", end_date: "", end_time: "", event_image: "", updateEventId: null });
        // this.props.events = [];
        // this.props.fetchEvents();

    }

    submitEvent = (e) => {
        e.preventDefault();
        if (this.state.updateEventId === null) {
            this.props.addEvent(
                this.state.title,
                this.state.description,
                this.state.start_date,
                this.state.start_time,
                this.state.end_date,
                this.state.end_time
            ).then(
                this.resetForm
            )
        } else {
            this.props.updateEvent(
                this.state.updateEventId,
                this.state.title,
                this.state.description,
                this.state.start_date,
                this.state.start_time,
                this.state.end_date,
                this.state.end_time
            ).then(
                this.resetForm
            );
        }
    }

    selectForEdit = (id) => {
        let event = this.props.events[id];
        this.setState({
            title: event.title,
            description: event.description,
            start_date: event.start_date,
            start_time: event.start_time,
            end_date: event.end_date,
            end_time: event.end_time,
            even_image: event.event_image,
            updateEventId: id
        });
    }

    render() {
        console.log('updateEventDeubug');
        return (
            <div>
                <h1 >Current Events</h1>
                <div className='row'>
                    {this.props.events.map((event, id) => (
                        <div className='event_container col-md-3' key={`event_${event.id}`}>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p>{event.start_date} {event.start_time}</p>
                            <p>to</p>
                            <p>{event.end_date} {event.end_time}</p>
                            <p>{event.event_image}</p>
                            <button className="btn btn-info" onClick={() => this.selectForEdit(id)}>Edit</button>
                            <button onClick={() => this.props.deleteEvent(id)} className="btn btn-danger">Delete</button>
                        </div>
                    ))}
                </div>

                <EventForm
                    submitEvent={this.submitEvent}
                    title={this.state.title}
                    description={this.state.description}
                    startDate={this.state.start_date}
                    startTime={this.state.start_time}
                    endDate={this.state.end_date}
                    endTime={this.state.end_time}
                    eventImage={this.state.event_image}
                    changeTitle={(e) => this.setState({ title: e.target.value })}
                    changeDescription={(e) => this.setState({ description: e.target.value })}
                    changeSdate={(e) => this.setState({ start_date: e.target.value })}
                    changeStime={(e) => this.setState({ start_time: e.target.value })}
                    changeEdate={(e) => this.setState({ end_date: e.target.value })}
                    changeEtime={(e) => this.setState({ end_time: e.target.value })}
                    changeImage={(e) => this.setState({ event_image: e.target.value })}
                />
            </div>
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
            console.log('fetching events');
            dispatch(events.fetchEvents());
        },
        addEvent: (title, description, start_date, start_time, end_date, end_time, event_image) => {
            return dispatch(events.addEvent(title, description, start_date, start_time, end_date, end_time, event_image));
        },
        updateEvent: (id, title, description, start_date, start_time, end_date, end_time, event_image) => {
            return dispatch(events.updateEvent(id, title, description, start_date, start_time, end_date, end_time, event_image));
        },
        deleteEvent: (id) => {
            dispatch(events.deleteEvent(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Events);
