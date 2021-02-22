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

  if(screen.width < 600) {
    return (
      <div id={'construction'}>
        <h2>Unfortunately, I am still constructing the mobile version.</h2>
        <h3>Check out my site on desktop!</h3>
      </div>
    );
  }

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