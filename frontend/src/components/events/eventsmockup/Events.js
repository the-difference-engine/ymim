import React,  {Component} from 'react';
import "react-bootstrap";
import SingleCarousel from "../../SingleCarousel";
import './event.css';


class Events extends Component{





render(){



return(
    <>

    <SingleCarousel header={"youth"} />
    <div className="container">

    <h1>Events</h1>

    <h2>Upcoming Events</h2>


{/* // {this date needs to dynamic} */}
    <h2>Mar 9.2019 - Let's Do 300! Emergencey Care Package Drive </h2>


 <p>Join Young MasterBuilders in Motion on March 9th at the Rogers Park Library to collect and paclage essential supplies for foster youth</p>


 <p>It's estimated that 5,000 youth age out of foster care in the Chicagoland area each year. Young Masterbuilders in Motion is working to reverse
    the impact of poverty by letting our teen girls and young adult women who have experienced foster care know that we care. We know it's an urgent situation.
    We need your support! Won't you join us?
 </p>

<p>RSVP and Find out More:</p>

<p>Eventbright:<a href="#">http://www.eventbrite.com</a></p>

<p>Facebook:<a href="#">https://facebook.com/pg/theymin/events</a></p>



<button type="submit">View Past Event</button>
    </div>

<div class="container-fluid background">

  <div class="container">
  <h2>Event Gallery</h2>

      <div class="flex-grid">
  <div class="col"><img src="#" alt="not here"/></div>
  <div class="col"><img src="#" alt="not here"/></div>
  <div class="col"><img src="#" alt="not here"/></div>
  <div class="col"><img src="#" alt="not here"/></div>
  <div class="col"><img src="#" alt="not here"/></div>
  <div class="col"><img src="#" alt="not here"/></div>
  <div class="col"><img src="#" alt="not here"/></div>
  <div class="col"><img src="#" alt="not here"/></div>
  <div class="col"><img src="#" alt="not here"/></div>
</div>


  </div>
</div>

    </>
)
}




}




export default Events;