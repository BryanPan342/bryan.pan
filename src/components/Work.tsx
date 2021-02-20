import React from 'react';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Work(): JSX.Element {
  return (
    <Layout>
      <Splash
        page={PAGE.WORK}
        description={'I like working with fun and creative people.'}/>
    </Layout>
  );
}

export default Work;