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
  width: number;
  height: number;
  isMobile: boolean;
}

export const AppContext = createContext<IAppContext>({
  autoScroll: true,
  setAutoScroll: () => undefined,
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: false,
});

function App(): JSX.Element {
  const [autoScroll, setAutoScroll] = useState(true);
  const {width, height} = useWindowSize();

  return (
    <AppContext.Provider
      value={{
        autoScroll: autoScroll,
        setAutoScroll: setAutoScroll,
        width: width ?? window.innerWidth,
        height: height ?? window.innerHeight,
        isMobile: (width ?? window.innerWidth) <= 600,
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