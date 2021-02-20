import React from 'react';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';
import {projects} from './content';
import { generateContent } from './content/utils';

function Projects(): JSX.Element {
  return (
    <Layout>
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