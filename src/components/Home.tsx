import React from 'react';
import { PAGE } from '../utils/page';
import Layout from './shared/Layout';
import Splash from './shared/Splash';

function Home(): JSX.Element {
  return (
    <Layout>
      <>
        <Splash
          page={PAGE.HOME}
          description={'I love building software for others, meeting new people, and drinking coffee.'}/>
        <Splash
          id={0}
          page={PAGE.ABOUT}
          description={'I enjoy sunrise hikes and listening to music (specifically indie pop).'}/>
        <Splash
          id={1}
          page={PAGE.PROJECTS}
          description={'I like building things, just because.'}/>
        <Splash
          id={2}
          page={PAGE.WORK}
          description={'I like working with fun and creative people.'}/>
      </>
    </Layout>
  );
}

export default Home;