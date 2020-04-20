import React, { Component } from 'react'
import parkData from './data/parks.json'
import {Link} from 'react-router-dom'


export class Parks extends Component {
    constructor(props) {
        super(props)
        this.state={
            parks:parkData

        }
        
    }

    render() {

         let parkList = this.state.parks.parks.map((park,index)=>{
            return(
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={park.image}/>
                                <span className="card-title ">{park.park_name}</span>
                            </div>
                            <div className="card-content light-blue lighten-5">
                                <p>{park.description}</p>
                            </div>
                            <div className="card-action">
                                <Link to="/parks:{park_name}">This is a link</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        })
        return (
            <div>
                {parkList}
            </div>
        )
    }
}

export default Parks
