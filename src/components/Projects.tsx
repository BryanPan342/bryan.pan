import React from 'react';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Projects(): JSX.Element {
  return (
    <Layout>
      <Splash
        page={PAGE.PROJECTS}
        description={'I like building things, just because.'}
        />
    </Layout>
  );
}

export default Projects;