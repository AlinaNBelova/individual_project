import axios from 'axios'
import ReactMapGL, {Marker,Popup} from 'react-map-gl'
import React, {Component} from 'react'


const token = "pk.eyJ1IjoiYWxpbmFuYmVsb3ZhIiwiYSI6ImNrOTA0NDRqdTAwZngza2xra3VtMXU3NHMifQ.yI6z9ybRtqluLv9iPnAfvQ"
const URL = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10"

class Cluster extends Component{
    constructor(props){
        super(props)
        this.state = {
            viewport:{
                latitude: 52.6376,
                longitude: -1.135171,
                width: "100vw",
                height: "100vh",
                zoom: 12,
                
            },
            crimes:[],
            setSelectedCrime:{},
            selectedCrime :false
        }
       
        }

        componentDidMount(){
            axios.get(URL)
            .then(results=>{
                let crimesArray = results.data.slice(0,100)
                console.log(results)
                this.setState({
                    crimes:crimesArray
                }, ()=>{ 
                    console.log(`updated crime data, ${this.state.crimes}`);
                })
                
            })
    }


    render(){
        return(
            <>
            <ReactMapGL {...this.state.viewport}
                mapboxApiAccessToken ={token}
                maxZoom = {20}
                onViewStateChange={newViewport =>{
                    this.setState({viewport:newViewport.viewState})
                } }>
                    {
                        this.state.crimes.map(crime=>{
                            return <Marker key={crime.id}
                            latitude={parseFloat(crime.location.latitude)}
                            longitude={parseFloat(crime.location.longitude)}>
                                <button onClick={e=>{
                                e.preventDefault();
                                this.setState({
                                    setSelectedCrime: crime,
                                    selectedCrime:true
                                },()=>{
                                    console.log(this.state.setSelectedCrime)
                                })
                            }

                                
                                }>
                                    <img src ="https://www.pikpng.com/pngl/m/214-2149333_media-record-png-clip-art-recording-red-dot.png" style={{width:"20px"}}/>

                                </button>   

                                </Marker>
                        })
                    }
                    {this.state.selectedCrime ? (
                        <Popup 
                        latitude={parseFloat(this.state.setSelectedCrime.location.latitude)}
                        longitude={parseFloat(this.state.setSelectedCrime.location.longitude)} 
                        onClose={()=>{
                            this.setState({
                                selectedCrime:false
                            })
                            }
                            }
                            >
                        )}
                        <div>
                            hello!
                            {/* <h2>{this.state.setSelectedCrime}</h2>
                            <p>{this.state.setSelectedCrime}</p> */}
                        </div>
                        </Popup>
        ) : null}

                </ReactMapGL>


            </>
        )
    }
}
export default Cluster
