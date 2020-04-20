import React, { Component } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import parkData from './data/parks.json'


const token = "pk.eyJ1IjoiYWxpbmFuYmVsb3ZhIiwiYSI6ImNrOTA0NDRqdTAwZngza2xra3VtMXU3NHMifQ.yI6z9ybRtqluLv9iPnAfvQ"


export class ParksMap extends Component {
    constructor(props){
        super(props)
        this.state = {
            // mapStyle:'mapbox://styles/mapbox/streets-v11',
            viewport:{
                latitude: 29.75670,
                longitude: -95.36369,
                width: "100vw",
                height: "100vh",
                zoom: 10,
                
            },
            parks:parkData,
            setSelectedPark:{},
            selectedPark: false

        }
        console.log(this.state.parks)
    }
    
   

    render() {

        let parkMarkers = this.state.parks.parks.map(park=>{
            return(
            <Marker key={park.park_id}
            latitude={park.latitude}
            longitude={park.longitude}>
                <button onClick={e=>{
                    e.preventDefault();
                    this.setState({
                        setSelectedPark:park,
                        selectedPark:true
                    },()=>{console.log(` selected park ${this.state.setSelectedPark}`)})
                }}>
                    <i class="small material-icons">directions_bike</i>
                </button>   
            </Marker>
        )
    })

        return (
            <div>
                <ReactMapGL {...this.state.viewport}
                mapboxApiAccessToken ={token}
                maxZoom = {20}
                mapStyle= {'mapbox://styles/mapbox/streets-v11'}>
                onViewStateChange={newViewport =>{
                    this.setState({viewport:newViewport.viewState})
                } }>
                {
                    this.state.parks.parks.map(park=>{
                return(
                    <Marker key={park.park_id}
                    latitude={park.latitude}
                    longitude={park.longitude}>
                        <button onClick={e=>{
                            e.preventDefault();
                            this.setState({
                                setSelectedPark:park,
                                selectedPark:true
                            },()=>{console.log(` selected park ${this.state.setSelectedPark.image}`)})
                        }}>
                            <i className="small material-icons">directions_bike</i>
                        </button>   
                    </Marker>
                )
                })
                }
                    {/* {parkMarkers} */}
                {this.state.selectedPark ? (
                    <Popup 
                    latitude={this.state.setSelectedPark.latitude}
                    longitude={this.state.setSelectedPark.longitude} 
                    onClose={()=>{
                        this.setState({
                            selectedPark:false
                        })
                        }}>
                    
                    <div>
                        <img src={this.state.selectedPark.image} alt={this.state.setSelectedPark.park_name} />
                        <h6>{this.state.setSelectedPark.park_name}</h6>
                        <p>trail length is:{this.state.setSelectedPark.trail_length} miles</p>
                    </div>
                    </Popup>
                ) : null}

                
                


                </ReactMapGL>
                
            </div>
        )
    }
}

export default ParksMap

  
  
