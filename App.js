import './App.css';

import React, {Component} from 'react';
import NavBar from './components/NavBar';
import NavForm from './components/NavForms';
import axios from 'axios'
class App extends Component {

  render(){
          return(
                <div>
                <NavBar/>
                <NavForm/>
                </div>
          )
  }


}

export default App;
