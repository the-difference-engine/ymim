import React, { Component } from "react";
import Markdown from "react-markdown";
import Text from "./about.md";
import {
  Container,
  Col,
  Row
  
} from "react-bootstrap";

class About extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { text: null };
  // }

  // componentWillMount() {
  //   fetch(Text)
  //     .then(response => response.text())
  //     .then(text => {
  //       this.setState({ text: text });
  //     });
  // }
  // render() {
  //   return <Markdown className="entry-content" escapeHtml={false} source={this.state.text} />;
  // }

  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col className="meetTheTeam">
            <h1>About</h1>

            <h2>Our Mission</h2>
            <p>The Young Masterbuilders in Motion (**YMIM**) inspires, connects, and empowers young women orphans, adoptees, and foster youth alumnae to thrive.</p>

            <p>The **YMIM** provides a holistic approach to mentoring and leadership development. Our programs are delivered through empowerment workshops, life enrichment retreats, and international missions experiences.
            </p>

            <h2>Our Values</h2>
            <p>We believe that a caring and supportive community can equip young women and empower global communities.</p>

            <p>We whole-heartedly embrace peace, grace, joy, love and wisdom and want to share what we have learned in our wide and varied life experiences with those who are yet vulnerable and who desire such support.   
            </p>

            <h2>Our Approach to Engagement</h2>
            <p>The **YMIM** works to enhance participants’ global perspective of the world economy. Through access and exposure to the arts, healthcare advocacy, sciences, technology, industries, and international mission experiences we aim to enrich the cultural, personal, and professional aspects of each participant.</p> 

            <p>We listen to participants, address their concerns, and help connect them with resources to navigate life. We help participants develop life skills necessary to thrive as the masterbuilder of their future.</p>

            <p>Our approach includes models and scenarios of self-direction that cover a broad span on topics of visioning life goals, decision making, and self-sufficiency. Additionally, we help participants mature in accountability and leadership through peer-to-peer mentoring and workshops on the precepts and concepts of entrepreneurship, sustained employment, global community service activities and more.
            </p>

            <h2>Our Road to Impactful Programming</h2>
            <p>
            Alumnae input and feedback are the drivers of ongoing program enhancements. Our pre and post self assessments provide our guideposts to impactful programming. Participants of each age segment serve on ideation and planning committees. Participant-centered needs is how we determine where to prioritize cultural, education, life skills, and employment programming. 
            </p>

            <h2>Resources and Referrals</h2>
            <p>We link participants to resources and services beyond our capacity for those desiring or requiring additional support.</p>

            <h2>Join us!</h2>
            <p>
            [Enroll ](/enrollment/)today for the 2019 cohort. Applications are now being accepted. Qualifications are for young women, who are orphans, adoptees, and foster youth alumnae up to age 30\. Referrals and recommendations are welcome.
            </p>

            <h2>Ambassador Sponsorships Available</h2>
            <p>
            We welcome your thoughtful and generous contributions. Let us know which area(s) you are best able to support: operations, logistics, academic tutoring, curriculum planning, employment readiness, women’s healthcare advocacy, marketing, public relations, missions service trips, or fundraising.</p>

            <p>The **YMIM** welcomes your time, talent, and treasure. Every financial and in-kind gift is applied to our core programs – helping young women build resiliency, hope, and a bright future.</p> 

            <p>The Young Masterbuilders in Motion, Inc., is a 501(c)(3) charitable organization and your financial contributions are deductible to the full extent of the law.</p>

            <p>Consider becoming a [sponsor](/become-a-sponsor/) on behalf of foster alumnae today. Your recurring or one-time tax deductible gifts matters!</p>

            <p>[Contact us now!](/contact-us/)
            </p>
              

            
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

export default About;
