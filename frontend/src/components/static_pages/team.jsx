import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./team.css";
import Picture1 from "../../assets/action-shots/3 rows of donations lined up.jpg"
import Picture2 from "../../assets/action-shots/3 rows of donations lined up.jpg"
import Picture3 from "../../assets/action-shots/3 rows of donations lined up.jpg"
import Picture4 from "../../assets/action-shots/3 rows of donations lined up.jpg"
import Picture5 from "../../assets/action-shots/3 rows of donations lined up.jpg"
import Picture6 from "../../assets/action-shots/3 rows of donations lined up.jpg"
import Picture7 from "../../assets/action-shots/3 rows of donations lined up.jpg"
import Picture8 from "../../assets/action-shots/3 rows of donations lined up.jpg"
import Picture9 from "../../assets/action-shots/3 rows of donations lined up.jpg"


class Team extends Component {
  render() {
    return (
      <div>
        <div className="membersDisplay">
          <Container>
            <Row>
              <Col>
                <Col className="meetTheTeam">
                  <h2>Meet The Team</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Blanditiis voluptas quia laboriosam ea, ut delectus
                    perferendis quae nisi necessitatibus non sapiente nesciunt
                    unde officia quis facilis temporibus itaque eaque optio!
                  </p>

                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, rerum labore. Ipsa voluptatibus odit impedit repellat
                    facere quos eius. Laudantium unde, totam autem temporibus
                    rerum debitis culpa natus! Ipsum eaque assumenda deleniti
                    voluptates. Soluta culpa ut eius aliquid rerum delectus.
                    Pariatur ipsa sit delectus, vel illum ratione quis
                    architecto eveniet!
                  </p>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="teamPhotosArea">
          <Container className="teamPhotos">
            <Row>
              <Col>
                <h2>Gallery</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <img src={Picture1} className="gallery-picture" alt="dream team" />
              </Col>
              <Col sm={4}>
                <img src={Picture2} className="gallery-picture" alt="donation" />
              </Col>
              <Col sm={4}>
                <img src={Picture3} className="gallery-picture" alt="jm_mw_ep" />
              </Col>
              <Col sm={4}>
                <img src={Picture4} className="gallery-picture" alt="calix" />
              </Col>
              <Col sm={4}>
                <img src={Picture5} className="gallery-picture" alt="calix" />
              </Col>
              <Col sm={4}>
                <img src={Picture6} className="gallery-picture" alt="calix" />
              </Col>
              <Col sm={4}>
                <img src={Picture7} className="gallery-picture" alt="calix" />
              </Col>
              <Col sm={4}>
                <img src={Picture8} className="gallery-picture" alt="calix" />
              </Col>
              <Col sm={4}>
                <img src={Picture9} className="gallery-picture" alt="calix" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Team;
