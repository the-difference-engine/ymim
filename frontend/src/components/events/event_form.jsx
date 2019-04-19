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
                            <input value={this.props.title} type="text" className="form-control" id="title" placeholder="Please enter title" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" defaultValue={"\n                "} />
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputTime">Start Time</label>
                        <input type="time" className="form-control" id="inputTime" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputDate">Start Date</label>
                        <input type="date" className="form-control" id="inputDate" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputTime">End Time</label>
                        <input type="time" className="form-control" id="inputTime" />
                    </div>

                    <div className="form-group col-md-3">
                        <label htmlFor="inputDate">End Date</label>
                        <input type="date" className="form-control" id="inputDate" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputImage">Add Image</label>
                        <input type="file" className="form-control" id="addImage" />
                    </div>
                    <button type="submit" className="btn btn-primary ml-3">Add Event</button>
                </form>
            </div>

        );
    }
}

export default EventForm;