import React from 'react';
import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import { Row, Container, Jumbotron, Col } from 'react-bootstrap';
import '../pages/page-resources/Weather.css'
import Cloud  from '../resources/cloud.png';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';




const Weather = () => {
    
    const [weatherData, setWeatherData] = useState({});
    const [forecastData, setForecastData] = useState([]);
    const [city, setCity] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    const inputChange = a => {
        setSearchTerm(a.target.previousSibling.value);
        
    }

    const weather = useMemo(() => weatherData, [weatherData]);
    const forecastInfo = useMemo(() => forecastData, [forecastData]);

  
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: {searchTerm}, 
            days: '5'},
        headers: {
          'x-rapidapi-key': 'bb41867480msh767ee94b1aaad1fp1fd276jsn6d94ccedffc6',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };
     
    const Map = () =>{
        return(
            <div style={{width: '58vw', height: '58vh'}} id="map">
                <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDTNEvyN20eiLY2Ju_h7YCW6AUwODRqGeg'}
                loadingElement={<div style={{height:"100%"}} />}
                containerElement={<div style={{height:"100%"}}/>}
                mapElement={<div style={{height:"100%"}} />}
                />
            </div>
        )
    }  

    const loadMap = () => {
        return <GoogleMap defaultZoom={10} defaultCenter={{lat: 44.389339, lng: -79.685516}} />     
    }
    
    const WrappedMap = withScriptjs(withGoogleMap(loadMap));
    
      
    useEffect(() => {
        console.log("init");
        axios.request(options)
        .then(resp => {
            console.log("init");
            setWeatherData(resp.data.current);
            setForecastData(resp.data.forecast.forecastday);
            setCity(resp.data.location.name);
            
        });
    }, [searchTerm]);

    function condition() {    
        return weather.condition ? Object.values(weather.condition)[0] : "";
    }

    function location() {       
        return weather.condition ? Object.values(weather.name)[0] : "";
    }

    return(
        <Jumbotron>
            <Container fluid={true} className="rounded">
                <Row className="justify-content-center">
                        <h1 className="display-3 font-weight-bolder">Weather Lookup</h1>
                </Row>
            </Container>
            <Container className="icon-div">
                <img src={Cloud}></img>
            </Container>
            <Container className="info-div">
                <Row className="justify-content-center">
                        <h3 className="font-weight-light">{city}</h3>
                </Row>
                <Row className="justify-content-left">
                        <h3 className="font-weight-light">Temperature: {weather.feelslike_c}</h3>

                </Row>
                <Row className="justify-content-left">
                        <h3 className="font-weight-light">Conditions: {condition()}</h3>
                </Row>
            </Container>
            <Container className="clear"/>
            <Container fluid={true} className="searchbar-div">
                <Row className="justify-content-center py-5">
                    
                        <input type="text" placeholder="Enter location here." className="custom-form" name="searchBar" id="searchBar"/>
                        <button type="submit" className="custom-button" onClick={inputChange}>Search</button>
                    
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={12}>
                        <table className="table" id="forecastTable">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Low</th>
                                    <th>High</th>  
                                    <th>Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                                          
                                    {forecastInfo.map((data, i) => (
                                        <tr key={i}>
                                            <td>{data.date}</td>
                                            <td>{data.day.mintemp_c}</td>
                                            <td>{data.day.maxtemp_c}</td>
                                            <td>{data.day.avgtemp_c}</td>
                                        </tr>
                                    ))} 

                                    
                                     
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
            <Container className="justify-content-center">
                <Map />
            </Container>
            
        </Jumbotron>
    )
}


export default Weather;