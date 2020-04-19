import React, { Component } from 'react'
import parkData from './data/parks.json'


export class Parks extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
        
    }

    render() {

        let pakList =parkData.parks.map((park,index)=>{
            return(
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src="images/sample-1.jpg"></img>
                                <span className="card-title  light-blue lighten-5">{park.park_id}</span>
                            </div>
                            <div className="card-content light-blue lighten-5">
                                <p>{park.description}</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        })
        return (
            <div>
                {pakList}
            </div>
        )
    }
}

export default Parks
