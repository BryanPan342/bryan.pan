import React from 'react';
import { HERO_COLORS } from '../utils/colors';
import Content from './shared/Content';
import Layout from './shared/Layout';
import Splash, {PAGE} from './shared/Splash';

function About(): JSX.Element {
  return (
    <Layout>
      <>
        <Splash
          page={PAGE.ABOUT}
          description={'I enjoy sunrise hikes and listening to music (specifically indie pop).'}/>
        <Content
          heading='BRYAN PAN'
          description='I am a software devloper and a third-year computer science student at UCLA.'
          heroColor={HERO_COLORS.FAV_COLOR}>
          <>
            <div className={'details me-description-1'}>
            Thanks for wanting to get to know me! I love coffee, sunrise hikes, indie pop, and bright colors (look around). I aspire to make the perfect brunch meal, take pretty photos of nature, and collect beautiful watches.
            </div>
            <div className={'details me-description-2'}>
            I love meeting new people so feel free to reach out to chat!
            </div>
          </>
        </Content>
        <Content
          heading='SKILLS'
          description='Here are a few things I know.'
          heroColor={HERO_COLORS.FAV_COLOR}>
          <>
            <div className={'details skills-description'}>
            stuff
            </div>
          </>
        </Content>
      </>
    </Layout>
  );
}

export default About;