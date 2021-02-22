import React from 'react';
import { generateContent, work } from './content';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Work({autoNavigate, setAutoNavigate}): JSX.Element {
  return (
    <Layout autoNavigate={autoNavigate} setAutoNavigate={setAutoNavigate}>
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