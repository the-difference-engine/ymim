import React,{Component} from 'react';

import Markdown from "react-markdown";
import "./contact.css";
import Text from "../Markdowns/enroll.md";
import 'react-bootstrap';
import SingleCarousel from '../SingleCarousel/SingleCarousel.js';

class Contact extends Component{

    render() {
        return (
          <>
          <SingleCarousel header={"Contact"}className="mb-5" />
    
          <div className="container">
          <h1 className="mt-5">Contact us</h1>
          <div className="main-content container col-sm-6 float-right mt-5">
           
            </div>
            <div className="container col-sm-6 float-left mt-5">
              <form action="/" method="post">
                <div>
                <label for="name" className="col-xs-4 block labelFont">Name(required)</label>
                  <input  id="name" required="" type="text"  className="col-md-10 inputs" />
                </div>
                <br />
                <div>
                  <label for="email" className="col-md-2 block labelFont">Email(required)</label>
                  <input id="email" required="" type="email" className ="col-md-10 inputs" />
                </div>
                <br />
                <div>
                  <label for="phone" className="col-md-2 block labelFont">Phone(required)</label>
                  <input id="phone" type="text" className="col-md-10 inputs" />
                </div>
                <br />
                
                <div>
                  <label className="col-md-4 block mt-3 mb-1 labelFont">Message</label>
                
                  <textarea name="" rows="6" className="col-md-10 mb-4  inputs-text" />
                </div>
             
                <div className="col-md-8 mb-5 ">
                  <p>
                    <button className="button" type="submit" value="Submit"> <span className="buttonSpan">Submit</span></button>
                  </p>
       
                </div>
              </form>
            </div>
            </div>
          </>
        );
      }
    }
  



export default Contact;