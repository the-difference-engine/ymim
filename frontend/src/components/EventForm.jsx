import React, { Component } from 'react';

class EventForm extends Component {
    render() {
        return (
            <div>
                <h1>Create an Event</h1>
                <form onSubmit={this.props.submitEvent}>
                    <div >
                        <div className="form-group col-md-3">
                            <label htmlFor="title">Title</label>
                            <input value={this.props.title} onChange={this.props.changeTitle} type="text" className="form-control" id="title" placeholder="Please enter title" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="description">Description</label>
                            <input value={this.props.description} onChange={this.props.changeDescription} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputTime">Start Date & Time</label>
                        <input value={this.props.startTime} onChange={this.props.Stime} type="datetime-local" className="form-control" id="inputTime" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputTime">End Date & Time</label>
                        <input value={this.props.endTime} onChange={this.props.changeEtime} type="datetime-local" className="form-control" id="inputTime" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputImage">Add Image</label>
                        <input value={this.props.eventImage} onChange={this.props.changeImage} type="file" className="form-control" id="addImage" />
                    </div>
                    <button type="submit" className="btn btn-primary ml-3">Add Event</button>
                </form>
            </div>

        );
    }
}

export default EventForm;