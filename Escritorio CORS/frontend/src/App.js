import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './Component/Navigation'
import NoteList from './Component/NotesList'
import CreateNote from './Component/CreateNote'
import Server from './Component/Sever'

function App() {
  return (
    <Router>
      <Navigation/>

      <Route path="/" exact component={NoteList}/>
      <Route path="/edit/:id" component={CreateNote}/>
      <Route path="/server" component={Server}/>
    </Router>
  );
}

export default App;
