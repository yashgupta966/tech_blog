import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navbar/Navigation';
import Home from './components/HomeComp/Home';
import WebdComp from "./components/Webd/WebdComp";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/webd"><WebdComp /></Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
