import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import NavBar from './NavBar';


const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [{ lat: 45.62971555855009, lng: -73.51648254884661 },
            { latitude: 45.49340226063122, longitude: -73.57969544866975 },
            { latitude: 45.49347986122256, longitude: -73.57970822189485 },
            { latitude: 45.493706693107335, longitude: -73.57938463352563 },
            { latitude: 45.494306599346466, longitude: -73.57874597227062 },
            { latitude: 45.49421907217822, longitude: -73.57994508427967 },
            { latitude: 45.494155146085916, longitude: -73.5798217026655 },
            { latitude: 45.49315864172925, longitude: -73.57859325093901 },
            { latitude: 45.493004464008926, longitude: -73.57875954789768 }]
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
            <div>
            <NavBar />
            <Map
                google={this.props.google}
                zoom={18}
                style={mapStyles}
                initialCenter={{ lat: 45.493563430970646, lng: -73.57952513900175 }}
            >
                {this.displayMarkers()}
            </Map>
            </div>
            

        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBXs2c0Ul3OAB9W4i2ljJ_sWV1N1lLYsW0'
})(MapContainer);
