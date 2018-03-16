import React from "react";
import { BrowserRouter , Route ,Link ,withRouter} from "react-router-dom";
import { AboutUs } from "./AboutUs";

export class Header extends React.Component {
    constructor(props){
        super(props);
    }
    handleAboutUs(){
        console.log(this.props.location.search);
        
    }
    render(){
        return(
        
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to="/home"> Home</Link> </li>
                            <li><Link to="/aboutus"> About Us </Link></li>
                            <li><Link to="/contactus"> Contact Us </Link></li> 
                        </ul>
                    </div>
                </div>
            </nav>
            
           
        );
    }
}
export default withRouter(Header);