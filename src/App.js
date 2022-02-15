import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';
import Nav from './components/nav.js';
import MainContent from './components/main_content.js';
import Search from './search.js';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Nav></Nav>
              <MainContent />
            </Route>          
                  
            <Route path="/search" component={Search}>
                  
            </Route>          
          </Switch>
          <Footer></Footer> 
        </div>
      </Router>
    );
  }
}


export default App;
