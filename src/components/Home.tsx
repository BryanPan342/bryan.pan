import React from 'react';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Home(): JSX.Element {
  return (
    <Layout >
      <Splash
        page={PAGE.HOME}
        description={'I love building software for others, meeting new people, and drinking coffee.'}/>
    </Layout>
  );
}

export default Home;