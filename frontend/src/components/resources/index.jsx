import React, { Component } from "react";
import { Container, Jumbotron, Card, Accordion, Button } from "react-bootstrap";
import "./index.css";
class Resources extends Component {
  render() {
    return (
      <Container fluid={true} className="px-4">
        <div className="text-center">
          <h1>Resources</h1>
        </div>
        <Jumbotron id="hospitals">
          <h1>Hospitals</h1>
          <p>
            Elit deserunt occaecat adipisicing minim mollit dolore exercitation
            quis aliquip sit nostrud. Ad ut et irure ex pariatur occaecat non
            tempor irure ex occaecat culpa. Cillum esse quis laboris
            exercitation quis occaecat labore tempor quis ad et consectetur eu.
            Cupidatat pariatur ipsum commodo aute.
          </p>
          <p className="subparagraph">
            Nisi excepteur occaecat id quis enim id occaecat nostrud officia qui
            laboris nostrud. Irure aute ipsum proident proident ipsum commodo
            consequat irure in. Voluptate irure aliquip nulla in laborum do est
            in ullamco ipsum consequat. Aute aliqua dolor reprehenderit dolore
            duis cupidatat sint Lorem ad reprehenderit pariatur enim sint.
            Aliqua incididunt voluptate nisi adipisicing est voluptate esse
            reprehenderit irure commodo commodo. Quis incididunt adipisicing do
            ullamco ea nulla veniam. Sunt nostrud magna occaecat ad anim id. Ea
            labore sint ea ex ad qui sint consequat duis labore. Cillum
            excepteur fugiat ipsum do dolor et.
          </p>
        </Jumbotron>
        <Jumbotron id="urgent-care">
          <h1>Urgent Care</h1>
          <p>
            Elit deserunt occaecat adipisicing minim mollit dolore exercitation
            quis aliquip sit nostrud. Ad ut et irure ex pariatur occaecat non
            tempor irure ex occaecat culpa. Cillum esse quis laboris
            exercitation quis occaecat labore tempor quis ad et consectetur eu.
            Cupidatat pariatur ipsum commodo aute.
          </p>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className="subparagraph"
                  as={Button}
                  variant="link"
                  eventKey="1"
                >
                  Different Chitown locations
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Card.Title>Urgent Care Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Address
                  </Card.Subtitle>
                  <Card.Text>Short description</Card.Text>
                  <Card.Link href="#">Website</Card.Link>
                  <Card.Link href="#">(XXX)-XXX-XXXX</Card.Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Jumbotron>
        <Jumbotron id="shelters">
          <h1>Shelters</h1>
          <p>
            Elit deserunt occaecat adipisicing minim mollit dolore exercitation
            quis aliquip sit nostrud. Ad ut et irure ex pariatur occaecat non
            tempor irure ex occaecat culpa. Cillum esse quis laboris
            exercitation quis occaecat labore tempor quis ad et consectetur eu.
            Cupidatat pariatur ipsum commodo aute.
          </p>
          <p className="subparagraph">
            Nisi excepteur occaecat id quis enim id occaecat nostrud officia qui
            laboris nostrud. Irure aute ipsum proident proident ipsum commodo
            consequat irure in. Voluptate irure aliquip nulla in laborum do est
            in ullamco ipsum consequat. Aute aliqua dolor reprehenderit dolore
            duis cupidatat sint Lorem ad reprehenderit pariatur enim sint.
            Aliqua incididunt voluptate nisi adipisicing est voluptate esse
            reprehenderit irure commodo commodo. Quis incididunt adipisicing do
            ullamco ea nulla veniam. Sunt nostrud magna occaecat ad anim id. Ea
            labore sint ea ex ad qui sint consequat duis labore. Cillum
            excepteur fugiat ipsum do dolor et.
          </p>
        </Jumbotron>
        <Jumbotron id="emergency-resources">
          <h1>Emergency Resources </h1>
          <p>
            Elit deserunt occaecat adipisicing minim mollit dolore exercitation
            quis aliquip sit nostrud. Ad ut et irure ex pariatur occaecat non
            tempor irure ex occaecat culpa. Cillum esse quis laboris
            exercitation quis occaecat labore tempor quis ad et consectetur eu.
            Cupidatat pariatur ipsum commodo aute.
          </p>
          <p className="subparagraph">
            Nisi excepteur occaecat id quis enim id occaecat nostrud officia qui
            laboris nostrud. Irure aute ipsum proident proident ipsum commodo
            consequat irure in. Voluptate irure aliquip nulla in laborum do est
            in ullamco ipsum consequat. Aute aliqua dolor reprehenderit dolore
            duis cupidatat sint Lorem ad reprehenderit pariatur enim sint.
            Aliqua incididunt voluptate nisi adipisicing est voluptate esse
            reprehenderit irure commodo commodo. Quis incididunt adipisicing do
            ullamco ea nulla veniam. Sunt nostrud magna occaecat ad anim id. Ea
            labore sint ea ex ad qui sint consequat duis labore. Cillum
            excepteur fugiat ipsum do dolor et.
          </p>
        </Jumbotron>
      </Container>
    );
  }
}
export default Resources;
