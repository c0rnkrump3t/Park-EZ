import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [{ lat: 45.62971555855009, lng: -73.51648254884661 },
            { latitude: 45.62974313124825, longitude: -73.51657553975353 },
            { latitude: 45.629385058613394, longitude: -73.51457508374155 },
            { latitude: 45.631462014072575, longitude: -73.516624543885 },
            { latitude: 45.62739493226245, longitude: -73.51875072126252 },
            { latitude: 45.62739493226245, longitude: -73.51875072126252 },
            { latitude: 45.631503000518386, longitude: -73.51659028221708 },
            { latitude: 45.63064022278317, longitude: -73.51705162217493 },
            { latitude: 45.629822447284454, longitude: -73.51738421609697 },
            { latitude: 45.62947732742246, longitude: -73.51759879280462 },
            { latitude: 45.629612374595865, longitude: -73.51593582324257 },
            { latitude: 45.632215719930606, longitude: -73.51579634837205 }]
        }
    }
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude

            }}
                onClick={() => console.log("You clicked on map!")}
                icon={{
                    url: `/parking.png`,
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(40, 40),
                }}
            />
        })
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={18}
                style={mapStyles}
                initialCenter={{ lat: 45.630854821630685, lng: -73.51693342835968 }}
            >

                {this.displayMarkers()}
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBXs2c0Ul3OAB9W4i2ljJ_sWV1N1lLYsW0'
})(MapContainer);
