import React from 'react';
import { generateContent, about } from './shared/Content';
import Layout from './shared/Layout';
import Splash, {PAGE} from './shared/Splash';

function About(): JSX.Element {
  return (
    <Layout>
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