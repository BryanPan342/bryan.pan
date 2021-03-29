import React from 'react';
import { PAGE } from '../utils/page';
import { generateContent, work } from './shared/Content';
import Layout from './shared/Layout';
import Splash from './shared/Splash';

function Work(): JSX.Element {
  return (
    <Layout>
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