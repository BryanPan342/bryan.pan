import React, { useContext, useEffect } from 'react';
import {animate_description, animate_heading, animate_splash} from '../../../utils/animations';
import { PAGE } from '../../../utils/page';
import '../../styles/Splash.scss';

import { AppContext } from '../../App';
import { AboutHeading, AboutSplash } from './About';
import { HomeHeading, HomeSplash } from './Home';
import { ProjectsHeading, ProjectsSplash } from './Projects';
import { WorkHeading, WorkSplash } from './Work';

const getPageProps = (page: PAGE, screen_width: number, screen_height: number) => {
  const height_multipliers = screen_width > 600 ? [9, 5] : [20, 2];
  const width_multipliers  = screen_width > 600 ? [4.5, 3] : [1.6, 2];
  const headingDims = [screen_width / width_multipliers[0], screen_height / height_multipliers[0]];
  const splashDims  = [screen_width / width_multipliers[1], screen_height / height_multipliers[1]];
  const PAGE_MAP: {[key: string]: JSX.Element[]} = {
    [PAGE.HOME]: [
      <HomeHeading width={headingDims[0]} height={headingDims[1]} key={'home-heading'}/>,
      <HomeSplash width={splashDims[0]} height={splashDims[1]} key={'home-splash'} />,
    ],
    [PAGE.ABOUT]: [
      <AboutHeading width={headingDims[0]} height={headingDims[1]} key={'about-heading'}/>,
      <AboutSplash width={splashDims[0]} height={splashDims[1]} key={'home-splash'} />,
    ],
    [PAGE.PROJECTS]: [
      <ProjectsHeading width={headingDims[0]} height={headingDims[1]} key={'projects-heading'}/>,
      <ProjectsSplash width={splashDims[0]} height={splashDims[1]} key={'home-splash'} />,
    ],
    [PAGE.WORK]: [
      <WorkHeading width={headingDims[0]} height={headingDims[1]} key={'work-heading'}/>,
      <WorkSplash width={splashDims[0]} height={splashDims[1]} key={'home-splash'} />,
    ],
  };
  return PAGE_MAP[page];
};

export interface HeadingProps {
  width: number;
  height: number;
}

export interface SplashProps {
  page: PAGE;
  description: string;
}

function Splash(props: SplashProps): JSX.Element {
  const { width, height } = useContext(AppContext);
  const [ Heading, Hero ] = getPageProps(props.page, width, height);

  useEffect(() => {
    animate_heading();
    animate_description();
    animate_splash(props.page === PAGE.WORK);
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
        { Hero }
      </div>
    </div>
  );
}

export default Splash;