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
                <Container className="mb-5">
                    <Row className="justify-content-md-center">
                        <ul className="footerImageHeader">
                        <li className="h2-heading"><h2 className="foot_head movefont"><span className="trymovingfont">Inspiring </span></h2></li>
                        <li className="h2-heading moveConnecting"><h2 className="foot_head">Connecting</h2></li>
                         <li className="h2-heading"><h2 className="foot_head">Empowering</h2></li>
                        </ul>
                    </Row>
                    <Row className="justify-content-md-center">
                        <div className="pic-container">
                            <img className="pic" src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png" />
                        </div>

                        <div className="pic-container">
                            <img className="pic" src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png" />
                        </div>

                        <div className="pic-container">
                            <img className="pic" src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg" />
                        </div>

                        <div className="pic-container">
                            <img className="pic" src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png" />
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}