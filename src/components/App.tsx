import React from 'react';
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

  return (
    <Router>
      <Switch>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/work'>
          <Work />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;