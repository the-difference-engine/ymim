import React, { Component } from 'react';
import { connect } from 'react-redux';
import { events } from "../../actions";
import EventForm from './event_form';

class Events extends Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

    state = {
        text: "",
        updateEventId: null,
        title: "",
        description: ""
    }

    resetForm = () => {
        this.setState({ text: "", updateEventId: null });
    }

    submitEvent = (e) => {
        e.preventDefault();
        if (this.state.updateEventId === null) {
            this.props.addEvent(this.state.title).then(this.resetForm)
        } else {
            this.props.updateEvent(this.state.updateEventId, this.state.text).then(this.resetForm);
        }
        alert("You are trying to submit an event");
    }

    render() {
        return (
            <div>
                {/* <h1 class="entry-title" itemprop="headline">Events</h1>
                <div class="entry-content" itemprop="text">
                    <p><strong>Chicago / NW Indiana / Wisconsin events</strong></p>
                    <p><span id="more-479"></span></p>
                    <p><strong>2019 Upcoming Events</strong></p>
                    <p>Mar 9. 2019 – Let’s Do 300! Emergency Care Package Drive</p>
                    <p>1:00-4:30pm&nbsp; &nbsp;Venue: Rogers Park Library, 6709 N. Clark St., Chicago</p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2nd Floor – Community Meeting Room North&nbsp;</p>
                    <p>Facebook:&nbsp;https://www.facebook.com/pg/theymim/events</p>
                    <p>Eventbrite:&nbsp;&nbsp;https://ymim-emergency-care-packages-4-girls.eventbrite.com</p>
                    <p>Mar 2019 – Ongoing Marketing Intern recruitment (2019/2020)</p>
                    <p><strong>2019 Past Events</strong></p>
                    <p>Feb 2019 – Breakfast Brainstorm Meeting</p>
                    <p>Feb 2019 – Ongoing volunteer recruitment</p>
                    <p>Jan 2019 – Breakfast Brainstorm Meeting (cancelled due to freezing temps)</p>
                    <p>Jan 2019 – i.c. stars – Hack the Dream Pitch Competition</p>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Young Masterbuilders in Motion team named “Winners!!!”</p>
                    <p><strong>2018 Past Events</strong></p>
                    <p>Dec&nbsp; 2018 – Power Hour – YMIM Community discussion – Violence Prevention presented by City of Chicago Department of Public Health</p>
                    <p>Dec&nbsp; 2018 – Dance to Make a Difference – Old School Dance Fundraiser – tickets are available at https://OldSchoolDance-YMIM.eventbrite.com.</p>
                    <p>In the event of technical difficulties, alternate donation and ticket purchasing options are available. Please contact the YMIM Founder, Kim Wright at 773.941.1200, or via email at founder@theymim.org with your request for processing.</p>
                    <p>Nov 2018 – GivingTuesday&nbsp;</p>
                    <p>Nov 2018 – U. S. Marines 242nd Birthday Ball – Chicago&nbsp;</p>
                    <p>Nov 2018 – Chicago Veterans Ball – Hickory Hills</p>
                    <p>Sep 2018 – Trauma Healing Conference – SaintA (Milw)</p>
                    <p>Sep 2018 – Community Gathering on Race &amp; Trauma (Milw)</p>
                    <p>Sep 2018 – Tribute to Barry White</p>
                    <p>Sep 2018 – Mayor Lorraine Morton’s Homegoing</p>
                    <p>Sep 2018 – House Music @ The Shedd</p>
                    <p>Aug 2018 – Coed Discussion Forum</p>
                    <p>Aug 2018 – Blues event</p>
                    <p>Aug 2018 – Trauma Informed Care Training</p>
                    <p>Aug 2018 – The Spanish Table</p>
                    <p>Jul&nbsp; 2018 – mHub BBQ</p>
                    <p>Jul&nbsp; 2018 – WiSTEM C7 Showcase</p>
                    <p>Jul&nbsp; 2018 – Trauma Informed Care Training</p>
                    <p>Jun 2018 – Jazzin’ at the Shedd Aquarium</p>
                    <p>Jun&nbsp; 2018 – Artists of the Wall Festival</p>
                    <p>Jun&nbsp; 2018 – Rally and Peace March w/Chance the Rapper&nbsp;</p>
                    <p>Jun&nbsp; 2018 –&nbsp;Iyabo Kwayana of Blisstree Mayi Ma Film Preview</p>
                    <p>Jun&nbsp; 2018 – Almost Grown-ish&nbsp;</p>
                    <p>May 2018 – Urban Listening Retreat&nbsp;</p>
                    <p>May 2018 – Prospancia Leadership: “Disruptive Women”</p>
                    <p>May 2018 – Mothers’ Day Brunch</p>
                    <p>May 2018 – MillerCoors Business and Beer</p>
                    <p>May 2018 – Columbia College – OWN It!</p>
                    <p>May 2018 – Community Organizing&nbsp;</p>
                    <p>May 2018 – Google Presentation</p>
                    <p>May 2018 – Barbara Bates Design &amp; Entrepreneurial Workshop</p>
                    <p>Apr. 2018 – Women Thriving Fearlessly</p>
                    <p>Apr. 2018 – International trip to Dubai</p>
                    <p>Apr. 2018 – NEIU Spiritual/Mental Health Panel</p>
                    <p>Mar. 2018 – Spring Leadership Meeting – Part 2</p>
                    <p>Feb. 2018 – Evanston, IL – Levy Center, Le Tour De Noir Black Business Expo – Associate Board and Volunteer Recruitment</p>
                    <p>Feb. 2018 – Evanston, IL – LePeep Restaurant – Scholarship Council Meeting</p>
                    <p>Feb. 2018 – Oak Park, IL – Chicken &amp; Waffles Restaurant – Marketing Round table</p>
                    <p>Jan. 2018 – Chicago, IL – Rogers Park Library – Spring Leadership Meeting part 1 | Logic Model Presentation with guest facilitator: Anne Gramiak (sold out)</p>
                    <p><strong>2017 Past Events</strong></p>
                    <p>May 2017 – Chicago, IL – Pinstripes Restaurant – Chicago Community Trust – On The Table Events (2-day events)</p>
                    <p>Oct. 2017 – Chicago, IL – University of Illinois at Chicago – Community Focus Groups (2-day events)</p>
                    <p>Oct. 2017 – East Chicago, IN – East Chicago Public Library on Columbus Ave. – Leadership Meeting (1-day event)</p>
                    <p>In efforts to prepare for our upcoming cohort, we host community focus group events with alumnae and public individuals from the Chicagoland, Northwest Indiana, and Wisconsin region.</p>
                    <p>Young adult men and women who have experienced life as either an orphan, adoptee, or foster youth alumni share their diverse voices and stories on what they feel is needed or lacking for youth in care, and what they feel is needed now to help young women stand strong and thrive. We will continue listening to alumni and strive to create programs that matter.</p>
                    <p><a href="/contact-us/">Contact us now!</a></p>
                    <p>Our 2019-2020 co-hort participant recruitment campaign is now underway.&nbsp;&nbsp;<strong>The YMIM</strong> is seeking&nbsp;<a href="/ambassadors/">volunteer ambassadors</a> to support the cohort.&nbsp;Join our movement to inspire, connect, and empower young adult women orphans, adoptees, and foster youth alumnae. Now and always, your generous contributions are greatly appreciated!</p>
                </div> */}

                <h3>Current Events</h3>

                <table>
                    <tbody>
                        {this.props.events.map((event, id) => (
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
                </table>
                <EventForm
                    submitEvent={this.submitEvent}
                    title={this.state.title} />
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
            dispatch(events.fetchEvents());
        },
        addEvent: (text, title) => {
            return dispatch(events.addEvent(text, title));
        },
        updateEvent: (id, text) => {
            return dispatch(events.updateEvent(id, text));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Events);
