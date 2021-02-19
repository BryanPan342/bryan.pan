import React from 'react';
import Layout from './shared/Layout';
import Splash, {PAGE} from './shared/Splash';

function About(): JSX.Element {
  return (
    <Layout>
      <Splash
        page={PAGE.ABOUT}
        description={'I enjoy sunrise hikes and listening to music (specifically indie pop).'}
        />
    </Layout>
  );
}

export default About;