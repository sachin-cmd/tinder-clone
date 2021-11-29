import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SwipeButtons from "./SwipeButtons";
function App() {
  return (
    <div className="App">
      {/* <h1>Lets build MERN TINDER clone!</h1> */}
      <Router>
       <Header />
      
       <TinderCards/>
       <SwipeButtons/>

      </Router>

      
     
    </div>
  );
}

export default App;
