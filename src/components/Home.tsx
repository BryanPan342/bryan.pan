import React from 'react';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Home({autoNavigate, setAutoNavigate}): JSX.Element {
  return (
    <Layout autoNavigate={autoNavigate} setAutoNavigate={setAutoNavigate}>
      <Splash
        page={PAGE.HOME}
        description={'I love building software for others, meeting new people, and drinking coffee.'}/>
    </Layout>
  );
}

export default Home;