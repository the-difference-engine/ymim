import React,{Component} from 'react';

import Markdown from "react-markdown";
 import "./contact.css";
// import Text from "./enroll.md";
import 'react-bootstrap';
// import SingleCarousel from '../Single_Carousel/Single_Carousel.js';

class Contact extends Component{

    render() {
        return (
          <>
          {/* <SingleCarousel header={"Contact"}className="mb-5" /> */}
    
          <div className="container">
          <h1 className="mt-5">Contact us</h1>
          <div className="main-content container col-sm-6 float-right mt-5">

              <div className="mt-4">
              <p>Hello Ms. or Mr. Wonderful,</p>
                <p>Thank you for checking out our website and considering the Young Masterbuilders in Motion (<strong>YMIM</strong>) as your charity of choice.</p>
                <p>Together we can work to make a difference in the lives of&nbsp;young adult women orphans, adoptees, and foster youth teens and alumnae.</p>
                <p>Use the form below to let us know what’s on your mind and how we can help.</p>
                <p>Until next time,</p>
                <p>Kim Wright, MBA, U.S. Army Veteran</p>
                <p>Foster Youth Alumna</p>
                <p>Founder, Young Masterbuilders in Motion</p>
                <p>Email: Founder@theymim.org |&nbsp;Phone: 773.941.1200</p>
                <p>&nbsp;</p>
              </div>

              
           
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


// import React, { Component } from "react";

// class Contact extends Component {
//   render() {
//     return (
//       <div className="jumbotron">
//         <h1>Contact Us</h1>
//         <div>
//           <p>Hello Ms. or Mr. Wonderful,</p>
//           <p>
//             Thank you for checking out our website and considering the Young
//             Masterbuilders in Motion (<strong>YMIM</strong>) as your charity of
//             choice.
//           </p>
//           <p>
//             Together we can work to make a difference in the lives of&nbsp;young
//             adult women orphans, adoptees, and foster youth teens and alumnae.
//           </p>
//           <p>
//             Use the form below to let us know what’s on your mind and how we can
//             help.
//           </p>
//           <p>Until next time,</p>
//           <p>Kim Wright, MBA, U.S. Army Veteran</p>
//           <p>Foster Youth Alumna</p>
//           <p>Founder, Young Masterbuilders in Motion</p>
//           <p>Email: Founder@theymim.org |&nbsp;Phone: 773.941.1200</p>
//           <p>&nbsp;</p>
//           <div>
//             <form action="/" method="post">
//               <div>
//                 <label className="col-md-2">
//                   Name<span> (required)</span>
//                 </label>
//                 <input type="text" value="" className="col-md-4 " required="" />
//               </div>
//               <br />
//               <div>
//                 <label className="col-md-2 ">
//                   Email<span> (required)</span>
//                 </label>
//                 <input
//                   type="email"
//                   value=""
//                   className="col-md-4 "
//                   required=""
//                 />
//               </div>
//               <br />
//               <div>
//                 <label className="col-md-2">Phone</label>
//                 <input type="text" value="" className="col-md-4" />
//               </div>

//               <div>
//                 <label className="col-md-4">Message</label>
//               </div>
//               <div>
//                 <textarea name="" rows="6" className="col-md-8" />
//               </div>
//               <p>
//                 <input type="submit" value="Submit" />
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Contact;
