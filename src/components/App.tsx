import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { useWindowSize } from '../utils/hooks';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Work from './Work';
import '../assets/Bryan_Pan_Resume.pdf';

interface IAppContext {
  autoScroll: boolean;
  setAutoScroll: React.Dispatch<React.SetStateAction<boolean>>;
  width?: number;
  height?: number;
}

export const AppContext = createContext<IAppContext>({
  autoScroll: true,
  setAutoScroll: () => undefined,
});

function App(): JSX.Element {
  const [autoScroll, setAutoScroll] = useState(true);
  const {width, height} = useWindowSize();

  if(screen.width < 600) {
    return (
      <div id={'construction'}>
        <h2>Unfortunately, I am still constructing the mobile version.</h2>
        <h3>Check out my site on desktop!</h3>
      </div>
    );
  }

  return (
    <AppContext.Provider
      value={{
        autoScroll: autoScroll,
        setAutoScroll: setAutoScroll,
        width: width,
        height: height,
      }}>
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
    </AppContext.Provider>
  );
}

export default App;