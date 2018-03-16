import React, { Component } from 'react';
import { Header } from "./components/Header";
import { Home } from "./components/Home"; 
import { AboutUs } from "./components/AboutUs";
import { BrowserRouter ,Switch , Route ,Link} from "react-router-dom";
import { ContactUs } from './components/ContactUs';
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
            <div>
            <Header />
            <Switch>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/contactus" component={ContactUs} />
            
       
              
            <Route path="/home" component={Home} />
              </Switch>
            
        
      
      
        </div>        
            </BrowserRouter>
      </div>
    );
  }
}

export default App;


