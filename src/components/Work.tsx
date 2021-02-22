import React from 'react';
import { generateContent, work } from './content';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Work(): JSX.Element {
  return (
    <Layout >
      <>
        <Splash
          page={PAGE.WORK}
          description={'I like working with fun and creative people.'}/>
        { generateContent('work', work) }
      </>
    </Layout>
  );
}

export default Work;