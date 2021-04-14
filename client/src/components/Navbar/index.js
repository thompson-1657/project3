import React from "react";
import { Link} from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
            <Link to="/home" className="navbar-brand" href="#">
                <h1>dōnō</h1>
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"     data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mb-3 mb-lg-0">
            <li className="nav-item">
                 <Link to="/home" className="nav-link" aria-current="page" href="#">home</Link>
            </li>
             <li className="nav-item">
                <Link to="/donate" className="nav-link" aria-current="page" href="#">donate</Link>
             </li>
            <li className="nav-item">
                <Link to="/connect" className="nav-link" aria-current="page" href="#">connect</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" href="#">logout</Link>
            </li>

         </ul>
        </div>
        </div>
  </nav>
  )
}


export default Navbar