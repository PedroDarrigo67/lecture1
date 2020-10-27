import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import listadoConos from './routes/NoteListRoute'
import detallesConos from './routes/NoteDetailsRoute'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={listadoConos} />
          <Route path="/data/:id" exact component={detallesConos} />
        </Switch>
    </div>
  );
}

export default App;
