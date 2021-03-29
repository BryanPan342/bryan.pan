import React, { useContext, useEffect } from 'react';
import {animate_description, animate_heading, animate_splash} from '../../../utils/animations';
import '../../styles/Splash.scss';

import { AppContext } from '../../App';
import { AboutHeading, AboutSplash } from './About';
import { HomeHeading, HomeSplash } from './Home';
import { ProjectsHeading, ProjectsSplash } from './Projects';
import { WorkHeading, WorkSplash } from './Work';

export enum PAGE {
  HOME='HOME',
  ABOUT='ABOUT',
  PROJECTS='PROJECTS',
  WORK='WORK',
}

const getPageProps = (page: PAGE, screen_width: number) => {
  const width = screen_width / 4.5;
  const PAGE_MAP: {[key: string]: JSX.Element[]} = {
    [PAGE.HOME]: [
      <HomeHeading width={width} key={'home-heading'}/>,
      <HomeSplash width={width} key={'home-splash'} />,
    ],
    [PAGE.ABOUT]: [
      <AboutHeading width={width} key={'about-heading'}/>,
      <AboutSplash width={width} key={'home-splash'} />,
    ],
    [PAGE.PROJECTS]: [
      <ProjectsHeading width={width} key={'projects-heading'}/>,
      <ProjectsSplash width={width} key={'home-splash'} />,
    ],
    [PAGE.WORK]: [
      <WorkHeading width={width} key={'work-heading'}/>,
      <WorkSplash width={width} key={'home-splash'} />,
    ],
  };
  return PAGE_MAP[page];
};

export interface HeadingProps {
  width: number;
}

export interface SplashProps {
  page: PAGE;
  description: string;
}

function Splash(props: SplashProps): JSX.Element {
  const { width } = useContext(AppContext);
  const [ Heading, Splash ] = getPageProps(props.page, width ?? screen.width);

  useEffect(() => {
    animate_heading();
    animate_description();
    animate_splash();
  }, []);

  return (
    <div id={'splash-container'} className={'section'}>
      <div id={'headline-container'}>
        <div id={'heading'}>
          { Heading }
        </div>
        <div className={'description'}>{props.description}</div>
      </div>
      <div id={'hero'}>
        {Splash}
      </div>
    </div>
  );
}

export default Splash;