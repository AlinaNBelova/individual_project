import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import {Layer, Feature} from 'react-mapbox-gl';
import axios from 'axios'
import parkData from './data/parks.json';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import Container from './Container'
mapboxgl.accessToken = "pk.eyJ1IjoiYWxpbmFuYmVsb3ZhIiwiYSI6ImNrOTA0NDRqdTAwZngza2xra3VtMXU3NHMifQ.yI6z9ybRtqluLv9iPnAfvQ"
// const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: -95.687,
        lat: 29.726,
        pitch: 60, // pitch in degrees
        bearing: -60,
        zoom: 10,
        directions:[]
        
        };
        }
    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
        map.on('move', () => {
            this.setState({
            lng: map.getCenter().lng.toFixed(95),
            lat: map.getCenter().lat.toFixed(29),
            zoom: map.getZoom().toFixed(2)
            });
            });
       const el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker(el)
            .setLngLat([-95.2116615,29.791502])
            .addTo(map);
        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            profile: 'mapbox/cycling'

        })
        // map.addControl(directions, 'top-left')
     
        }
    addFromTo=(direction)=>{
        let directions =[...this.state.directions, direction]
        this.setState({
            directions:directions
        })
        console.log(directions)
    }


    render() {
     
      return (
            <div className= 'map-wrapper'>
            {/* <div className='sidebarStyle'>
            <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            </div> */}
            <div ref={el => this.mapContainer = el} className='mapContainer' />
                {/* {parkData.parks.map(park => (
                <Marker key={park.park_id}
                        lng={ park.latitude}
                        lat={park.longitude}>
                            <button className='marker- btn'
                            onclick = {e =>{
                                e.preventDefault();
                                // setSelectedPark(park);
                            }}>
                                
                            </button>

                    
                </Marker>
            ))} */}
            <Container addFromTo={this.addFromTo}/>
                {/* <Layer type="symbol" id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[29.726,-95.687]}/>
                </Layer> */}
                    
            </div>
        )
      }  
  }
  export default Application;