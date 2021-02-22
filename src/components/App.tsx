import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import About from './About';
import Home from './Home';
import Projects from './Projects';
import Work from './Work';

import '../assets/Bryan_Pan_Resume.pdf';

function App(): JSX.Element {
  const [autoNavigate, setAutoNavigate] = useState(true);

  return (
    <Router>
      <Switch>
        <Route exact path='/about'>
          <About autoNavigate={autoNavigate} setAutoNavigate={setAutoNavigate} />
        </Route>
        <Route exact path='/projects'>
          <Projects autoNavigate={autoNavigate} setAutoNavigate={setAutoNavigate} />
        </Route>
        <Route exact path='/work'>
          <Work autoNavigate={autoNavigate} setAutoNavigate={setAutoNavigate} />
        </Route>
        <Route path='/'>
          <Home autoNavigate={autoNavigate} setAutoNavigate={setAutoNavigate} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;