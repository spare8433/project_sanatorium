import React, {Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';
import Nav from './components/nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        {/*<Main></Main>
        <Footer></Footer> */}
      </div>
    );
  }
}


export default App;
