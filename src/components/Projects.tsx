import React from 'react';
import { PAGE } from '../utils/page';
import {generateContent, projects} from './shared/Content';
import Layout from './shared/Layout';
import Splash from './shared/Splash';


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