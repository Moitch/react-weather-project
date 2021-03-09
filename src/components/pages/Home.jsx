import React from 'react';
import { Row, Container, Jumbotron, Col } from 'react-bootstrap';
import '../pages/page-resources/Home.css';
const Home = () => {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true} className="rounded">
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <h1 className="display-1 font-weight-bolder">Weather App</h1> 
                        <h3 className="display-4 font-weight-light">By Mitchell Foley</h3> 
                        <Container className="my-5">
                            <h2 className="font-weight-light">This Application is a small Weather app, users can search up a
                            location and will be able to see the current weather of that location.</h2>
                        </Container>     
                    </Col>
                </Row>
            </Container>
        </Jumbotron>

        
    )
}


export default Home;