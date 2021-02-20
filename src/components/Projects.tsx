import React from 'react';
import { HERO_COLORS } from '../utils/colors';
import Content from './shared/Content';
import Layout from './shared/Layout';
import Splash, { PAGE } from './shared/Splash';

function Projects(): JSX.Element {
  return (
    <Layout>
      <> 
        <Splash
          page={PAGE.PROJECTS}
          description={'I like building things, just because.'}/>
        <Content
          heading='AL'
          description='A recipe saver, aggregator, and recommender for anyone.'
          heroColor={HERO_COLORS.AL_PURPLE}>
          <>
            <div className={'details al-description-1'}>
            Al is a recipe aggregator that allows budding and experienced cooks to centralize their recipes. With Al, you can save recipes from other sites in the format you desire and easily sift through great recipes.
            </div>
          </>
        </Content>
        <Content
          heading='AGORA'
          description='A collaborative canvas where every user can only draw a single stroke every 20 seconds.'
          heroColor={HERO_COLORS.AGORA_GREEN}>
          <>
            <div className={'details agora-description-1'}>
            Agora is a collaborative canvas centered around community. Agora was build such that every individual can only contribute one stroke at a time with the hope that people would come together to build something amazing.
            </div>
          </>
        </Content>
        <Content
          heading='STORYTIME'
          description='A story on coral bleaching by Sam Chai and Bryan Pan.'
          heroColor={HERO_COLORS.STORYTIME_BLUE}>
          <>
            <div className={'details agora-description-1'}>
            Storytime was the example site for Bloom, a UCLA Creative Labs program. It was inspired by the documentary <a target='_blank' rel='noreferer' href='https://www.chasingcoral.com/'>Chasing Coral</a> and born out of my love for the ocean/nature. I hope that people will see it and seek to learn more about coral bleaching and its affect on the world.
            </div>
          </>
        </Content>
      </>
    </Layout>
  );
}

export default Projects;