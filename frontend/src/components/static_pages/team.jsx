import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

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
              <Col>
                <img src="images/dream_team.jpg" />
              </Col>
              <Col>
                <img src="images/donation.jpg" />
              </Col>
            </Row>

            <Row>
              <Col>
                <img src="images/jm_mw_ep.jpg" />
              </Col>
              <Col>
                <img src="images/calix.jpg" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Team;
