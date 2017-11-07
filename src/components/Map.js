import React, { Component } from 'react';


// we import the json data locally
import hola from 'json!../../mini-store_directory.json'
console.log(hola.items)

const INITIAL_LOCATION = {
  position: {
    latitude: 19.43236,
    longitude: -99.1332
  }
};

const stores = [
  ['Loc1', 19.389882, -99.179829],
  ['Loc2', 19.401774, -99.176698],
  ['Loc3', 19.426993, -99.116713],
  ['Loc4', 19.459940, -99.139295]
];

export default class Map extends Component {
  constructor(){
    super()
    this.setMarkers = this.setMarkers.bind(this)
  }

  componentDidMount() {
    const {lat, lng} = this.props.initialPosition;
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat, lng},
      zoom: 12
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    });

    this.setMarkers(this.map)
  }

  setMarkers = map => {
    stores.map(stores => {
      const marker = new google.maps.Marker({
        position: {lat: stores[1], lng: stores[2]},
        map: map,
        title: stores[0]
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Map</h1>
        <div style={{width: 1000, height: 800, border: '1px solid black'}} ref="map"></div>
      </div>
    );
  }
}

Map.propTypes = {
  initialPosition: React.PropTypes.object.isRequired
};
