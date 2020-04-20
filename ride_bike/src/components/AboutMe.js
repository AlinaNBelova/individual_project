import React from 'react'
import {Link} from 'react-router-dom'

const AboutMe = (props) => {
        return (
            <div className="col s12 m7">
                <h4 className="header light-blue lighten-5">Hi! my name is Alina</h4>
                <div className="card horizontal">
                        <div className="card-image medium">
                            <img src="../photo/me copy.jpg" alt="my bike and me"></img>
                        </div>
                    <div className="card-stacked light-blue lighten-5">
                        <div className="card-content">                         
                        
                            <p>Besides being a web developer student, I like riding a bike.
                                My two-wheel story has started pretty late. I was 20 years old when I for the first time in my life was riding a 2-wheel  bicycle. 
                                Learning how to ride is hard when you are an adult, almost as hard as to learn code. Since I've learned,  I have spent many hours riding my bike. </p>
                            <p>For long trips, it is essential to check your way before leaving home. When I ride far away from home, sometimes I need some extra water or even tools for little repair.  This is why I decide to make my little project .</p>
                            </div>
                            <div className="card-action">
                        <a class="fa fa-github" href="https://github.com/AlinaNBelova" target="https://github.com/AlinaNBelova" > g</a>
                        <a class="fa fa-linkedin" href="#" target="https://www.linkedin.com/in/alina-belova-a30b0b1a4/" target="https://www.linkedin.com/in/alina-belova-a30b0b1a4/">l</a>
        
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }


export default AboutMe
