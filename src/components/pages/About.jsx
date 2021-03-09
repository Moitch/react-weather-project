import React from 'react';
import { Row, Container, Jumbotron, Col } from 'react-bootstrap';

const About = () => {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true} className="rounded">
            <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                    <h1 className="display-1 font-weight-bolder">Weather App</h1> 
                    <h3 className="display-4 font-weight-light">Instructions</h3> 
                    <Container className="my-5">
                        <h2 className="font-weight-light">To use the app, head to the Weather page using the navigation bar.
                        After arriving, you're greeted with a search bar. <br/><br/>Using this search bar you can search up most locations in the
                        world. After hitting enter, the app uses an API to grab weather data for the specified location and returns the
                        data to the screen. <br/><br/> Depending on the temperature, the background color will change. </h2>
                    </Container>
                    
                </Col>
            </Row>
        </Container>
    </Jumbotron>

    
    )
}


export default About;