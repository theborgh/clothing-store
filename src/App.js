import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';

const SampleNewPage = () => (
  <div><h1>Sample new page</h1></div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={SampleNewPage} />
      </Switch>
    </div>
  );
}

export default App;
