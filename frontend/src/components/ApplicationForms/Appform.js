import React, { Component } from "react";
import "./Appform.css";

class Appform extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-md-3 ml-4">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3 ml-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3 ml-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3 ml-4">
            <label htmlFor="DOB">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="DOB"
              placeholder="Date of Birth"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3 ml-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Please enter your phone number"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3 ml-4">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3 ml-4">
            <label htmlFor="address2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3 ml-4">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" id="city" />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="state">State</label>
            <select id="state" className="form-control">
              <option selected>Choose...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="zipCode">Zip</label>
            <input type="text" className="form-control" id="zipCode" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

export default Appform;
