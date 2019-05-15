import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';


export default class TopFooter extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="container-fluid">
                        <Row>
                            <Col className="box" lg="2" sm="12" xs="12">

                                <img class="pic" src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png" />

                            </Col>
                            <Col className="box" lg="2" sm="12" xs="12"></Col>
                            <Col className="box" lg="2" sm="12" xs="12"></Col>
                            <Col className="box" lg="2" sm="12" xs="12"></Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}