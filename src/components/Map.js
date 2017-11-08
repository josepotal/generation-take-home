import React, { Component } from 'react';

import stores from 'json!../../mini-store_directory.json'
console.log(stores)
//import data from '../utils/address-converter';

export default class Map extends Component {
  constructor(){
    super()
    this.setMarkers = this.setMarkers.bind(this)
    //this.geocodeAddress = this.geocodeAddress.bind(this)
  }

  componentDidMount() {
    const {lat, lng} = this.props.initialPosition;
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat, lng},
      zoom: 12
    });

    this.setMarkers(this.map)

    //this.geocoder = new google.maps.Geocoder();


    //json.items.map((item)=>this.geocodeAddress(item, this.geocoder))
  }

  setMarkers = map => {
    stores.items.map(store => {
      if( store.loc.length > 0){
        const marker = new google.maps.Marker({
          position: {lat: store.loc[0], lng: store.loc[1]},
          map: map,
          title: store.Name
        })
      }

    })
  }


//   geocodeAddress = (item, geocoder) => {
//     var loc=[];
//     geocoder.geocode({ 'address': item.Address }, (results, status) => {
//     console.log(status, results)
//
//     if (status === google.maps.GeocoderStatus.OK) {
//
//       //this.map.setCenter(results[0].geometry.location);
//       loc[0]=results[0].geometry.location.lat();
//       loc[1]=results[0].geometry.location.lng();
//       console.log(loc)
//       //this.marker.setPosition(loc);
//       const marker = new google.maps.Marker({
//         position: {lat: loc[0], lng: loc[1]},
//         map: this.map,
//         title: item.Name
//       })
//       return;
//     } else {
//       if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
//         console.log('exceeded')
//       }
//     }
//
//   })
// }


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
