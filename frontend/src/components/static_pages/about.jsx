import React, { Component } from "react";
import "./about.css";
import SingleCarousel from "../SingleCarousel/index";
import { Container, Row, Col } from "react-bootstrap";
import PierrePriestley from "./../../assets/Pierre-Priestley_new.jpg";
import ShirleyScott from "./../../assets/Shirley-Scott_new.jpg";
import KimWright from "./../../assets/KWright_new.jpg";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import getStrapi from "../../actions/strapi.js";

class About extends Component {
  componentDidMount() {
    this.props.gAbout();
  }

  render() {
    return (
      <Container fluid="true">
        <SingleCarousel
          className="carousel"
          header="Young Masterbuilders in Motion"
          image="ymim6.png"
        />
        <Container className="mainContainer">
          <Row id="aboutPageTextRow">
            <h1 className="heading"> About </h1>
            <h2 className="sub-heading">Our Mission</h2>
            <p className="text-left">
              The Young Masterbuilders in Motion (YMIM) inspires, connects, and
              empowers young women orphans, adoptees, and foster youth alumnae
              to thrive.
            </p>
            <p className="text-left">
              The YMIM provides a holistic approach to mentoring and leadership
              development. Our programs are delivered through empowerment
              workshops, life enrichment retreats, and international missions
              experiences.
            </p>
            <h2 className="sub-heading"> Our Values </h2>
            <p className="text-left">
              We believe that a caring and supportive community can equip young
              women and empower global communities.
            </p>
            <p className="text-left">
              We whole-heartedly embrace peace, grace, joy, love and wisdom and
              want to share what we have learned in our wide and varied life
              experiences with those who are yet vulnerable and who desire such
              support.
            </p>
            <h2 className="sub-heading">Our Approach to Engagement</h2>
            <p className="text-left">
              The YMIM works to enhance participants' global perspective of the
              world economy. Through access and exposure to the arts, healthcare
              advocacy, sciences, technology, industries, and international
              mission experiences we aim to enrich the cultural, personal, and
              professional aspects of each participant.
            </p>
            <p className="text-left">
              We listen to participants, address their concerns, and help
              connect them with resources to navigate life. We help participants
              develop life skills necessary to thrive as the masterbuilder of
              their future.
            </p>
            <p className="text-left">
              Our approach includes models and scenarios of self-direction that
              cover a broad span on topics of visioning life goals, decision
              making, and self-sufficiency. Additionally, we help participants
              mature in accountability and leadership through peer-to-peer
              mentoring and workshops on the precepts and concepts of
              entrepreneurship, sustained employment, global community service
              activities and more. **Our Road to Impactful Programming** Alumnae
              input and feedback are the drivers of ongoing program
              enhancements. Our pre and post self assessments provide our
              guideposts to impactful programming. Participants of each age
              segment serve on ideation and planning committees.
              Participant-centered needs is how we determine where to prioritize
              cultural, education, life skills, and employment programming.
              **Resources and Referrals** We link participants to resources and
              services beyond our capacity for those desiring or requiring
              additional support.
            </p>
          </Row>
          <h1 className="about-heading">Our People</h1>
          <Row className="about-people-row">
            <Col xs="12" md="5" lg="4" xl="4" className="images">
              <img
                id="kim-image"
                src={this.props.kimPhoto}
                alt={"Kim Wright"}
              />
            </Col>
            <Col xs="12" md="6" lg="6" xl="7" className="people-col">
              <h1 className="people-heading text-left">Kim Wright, MBA</h1>
              <h4 className="sub-heading text-left">Founder and President</h4>
              <p className="text-left">{this.props.aboutKim}</p>
            </Col>
          </Row>

          <Row className="about-people-row">
            <Col xs="12" md="5" lg="6" xl="5" className="images">
              <img
                id="pierre-image"
                src={this.props.pierrePhoto}
                alt={"Pierre Priestley"}
              />
            </Col>
            <Col xs="12" md="6" lg="6" xl="7" className="people-col">
              <h1 className="people-heading text-left">Pierre Priestley</h1>
              <h4 className="sub-heading text-left">
                Board Officer, Treasurer
              </h4>
              <p className="text-left">{this.props.aboutPierre}</p>
            </Col>
          </Row>

          <Row className="about-people-row" id="shirley">
            <Col xs="12" md="5" lg="6" xl="5" className="images">
              <img
                id="shirley-image"
                src={this.props.shirleyPhoto}
                alt={"Shirley Scott"}
              />
            </Col>
            <Col xs="12" md="6" lg="6" xl="7" className="people-col">
              <h1 className="people-heading text-left">
                Shirley Scott, MS, RN-BC, C-EFM, APN, DNP
              </h1>
              <h4 className="sub-heading text-left">
                Board Officer, Secretary
              </h4>
              <p className="text-left">{this.props.aboutShirley}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    aboutKim: state.strapi.aboutKim,
    aboutPierre: state.strapi.aboutPierre,
    aboutShirley: state.strapi.aboutShirley,
    kimPhoto: `http://localhost:1337${state.strapi.kimPhoto}`,
    pierrePhoto: `http://localhost:1337${state.strapi.pierrePhoto}`,
    shirleyPhoto: `http://localhost:1337${state.strapi.shirleyPhoto}`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gAbout: () => {
      dispatch(getStrapi("GET_ABOUT", "about-pages"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
