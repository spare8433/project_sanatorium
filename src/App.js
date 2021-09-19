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
import Main_content from './components/main_content.js';
import Search from './search.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Nav></Nav>
              <Main_content></Main_content>    
            </Route>          
                  
            <Route exact path="/search" component={Search}>    
            </Route>
          </Switch>
          {/*<Footer></Footer> */}
        </div>
      </Router>
    );
  }
}


export default App;
