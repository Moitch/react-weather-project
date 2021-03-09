import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

import { Row, Container, Jumbotron, Col } from 'react-bootstrap';
const Map = () =>{
    return(
        <div style={{width: '58vw', height: '58vh'}}>
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




export default Map;