import React from 'react'
import {Link} from 'react-router-dom'

const AboutMe = (props) => {
        return (
            <div className="col s12 m7">
                <h4 className="header light-blue lighten-5">Hi! my name is Alina</h4>
                <div className="card horizontal">
                        <div className="card-image">
                            <img src="https://lorempixel.com/100/190/nature/6"></img>
                        </div>
                    <div className="card-stacked light-blue lighten-5">
                        <div className="card-content">                          
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate perferendis suscipit pariatur magni possimus amet rem eius dolorum deserunt consectetur qui omnis commodi, culpa libero temporibus doloribus aut deleniti.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }


export default AboutMe
