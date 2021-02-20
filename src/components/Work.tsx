import React from 'react';
import { HERO_COLORS } from '../utils/colors';
import Content from './shared/Content';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Work(): JSX.Element {
  return (
    <Layout>
      <>
        <Splash
          page={PAGE.WORK}
          description={'I like working with fun and creative people.'}/>
        <Content
          heading='FACEBOOK'
          description='Software Engineer Intern'
          postDescription='Fall 2021'
          heroColor={HERO_COLORS.FACEBOOK_BLUE}>
          <>
            <div className={'details fb-21-description'}>Come back later to see what I worked on!</div>
          </>
        </Content>
        <Content
          heading='AMAZON WEB SERVICES'
          description='Software Engineer Intern'
          postDescription='Summer 2021'
          heroColor={HERO_COLORS.AMAZON_ORANGE}>
          <>
            <div className={'details aws-21-description'}>Come back later to see what I worked on!</div>
          </>
        </Content>
        <Content
          heading='AMAZON WEB SERVICES'
          description='Software Engineer Intern'
          postDescription='Summer 2020'
          heroColor={HERO_COLORS.AMAZON_ORANGE}>
          <>
            <div className={'details aws-20-description-1'}>
              I worked on the AWS Cloud Development Kit (CDK) team to, independently, design and build a code-first schema framework for GraphQL. 
            </div>
            <div className={'details aws-20-description-2'}>
              I took ownership of an experimental module, AWS AppSync, and made contributions to other modules in my free time.
            </div>
          </>
        </Content>
        <Content
          heading='BOOZ ALLEN HAMILTON'
          description='Summer Games Intern'
          postDescription='Summer 2019'
          heroColor={HERO_COLORS.BOOZ_ALLEN_TEAL}>
          <>
            <div className={'details bah-19-description-1'}>
            I developed a FOSS tool that visualizes a Kubernetes environment and actively monitors the health of elements within that environment. 
            </div>
          </>
        </Content>
      </>
    </Layout>
  );
}

export default Work;