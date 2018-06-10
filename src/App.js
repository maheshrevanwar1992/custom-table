import React, { Component } from 'react';
import './common/bootstrap.css';
import './App.css';
import { ContactList } from './components/Examples/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
