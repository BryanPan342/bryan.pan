import React from 'react';
import {generateContent, projects} from './content';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Projects({autoNavigate, setAutoNavigate}): JSX.Element {
  return (
    <Layout autoNavigate={autoNavigate} setAutoNavigate={setAutoNavigate}>
      <>
        <Splash
          page={PAGE.PROJECTS}
          description={'I like building things, just because.'}/>
        {generateContent('projects', projects)}
      </>
    </Layout>
  );
}

export default Projects;