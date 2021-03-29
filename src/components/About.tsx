import React from 'react';
import { PAGE } from '../utils/page';
import { generateContent, about } from './shared/Content';
import Layout from './shared/Layout';
import Splash from './shared/Splash';

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