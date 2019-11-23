import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {compose, withProps} from 'recompose';

const mapStyles = [{
  'featureType': 'all',
  'stylers': [{'saturation': 0}, {'hue': '#e7ecf0'}]
}, {'featureType': 'road', 'stylers': [{'saturation': -70}]}, {
  'featureType': 'transit',
  'stylers': [{'visibility': 'off'}]
}, {'featureType': 'poi', 'stylers': [{'visibility': 'off'}]}, {
  'featureType': 'water',
  'stylers': [{'visibility': 'simplified'}, {'saturation': -60}]
}];

const FooterMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBi3jugkDXYNwcwZEiWlo53wYQUVGwHZQc',
    loadingElement: <div className="footer-map__loader"/>,
    containerElement: <div className="footer-map__container"/>,
    mapElement: <div className="footer-map"/>
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16}
             defaultOptions={{styles: mapStyles}}
             defaultCenter={{lat: 57.143527, lng: 65.576540}}>
    <Marker position={{lat: 57.143527, lng: 65.576540}}/>
    <Marker position={{lat: 57.131551, lng: 65.600498}}/>
  </GoogleMap>
));

export {FooterMap};