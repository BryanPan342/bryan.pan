import React from 'react';
import { generateContent, about } from './content';
import Layout from './shared/Layout';
import Splash, {PAGE} from './shared/Splash';

function About({autoNavigate, setAutoNavigate}): JSX.Element {
  return (
    <Layout autoNavigate={autoNavigate} setAutoNavigate={setAutoNavigate}>
      <>
        <Splash
          page={PAGE.ABOUT}
          description={'I enjoy sunrise hikes and listening to music (specifically indie pop).'}/>
        { generateContent('about', about) }
      </>
    </Layout>
  );
}

export default About;