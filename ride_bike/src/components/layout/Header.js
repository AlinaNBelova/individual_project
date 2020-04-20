import React  from 'react'
import {Link} from 'react-router-dom'


const Header = (props) => {
  return (
    
      <nav>
        <div className="nav-wrapper light-blue lighten-2">
          <Link to="/" className="brand-logo"> <i className="large material-icons pink darken-2">directions_bike</i></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/parksmap">Map</Link></li>
            <li><Link to="/parks">Parks</Link></li>
            <li><Link to="/aboutme">About me</Link></li>
          </ul>
        </div>
      </nav>
    
  )
}

export default Header