import React from 'react';
import { Container, Row, Col }from 'react-bootstrap';
import './footer.css';

const Footer = () =>{
    return(
        <footer className="stick">
            <Container fluid={true} className="bg-dark">
                <Row className="footer justify-content-between p-3">
                    <Col className="d-flex justify-content-start">
                        Mitchell Foley
                    </Col>
                    <Col className="d-flex justify-content-end" md={2}>
                        This site was made by Mitchell Foley.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;