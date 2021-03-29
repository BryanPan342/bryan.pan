import React, { useContext, useEffect } from 'react';
import {animate_description, animate_heading, animate_splash} from '../../../utils/animations';
import { PAGE } from '../../../utils/page';
import '../../styles/Splash.scss';

import { AppContext } from '../../App';
import { AboutHeading, AboutSplash } from './About';
import { HomeHeading, HomeSplash } from './Home';
import { ProjectsHeading, ProjectsSplash } from './Projects';
import { WorkHeading, WorkSplash } from './Work';

const getPageProps = (page: PAGE, screen_width: number) => {
  const headingWidth = screen_width / 4.5;
  const splashWidth = screen_width / 3;
  const PAGE_MAP: {[key: string]: JSX.Element[]} = {
    [PAGE.HOME]: [
      <HomeHeading width={headingWidth} key={'home-heading'}/>,
      <HomeSplash width={splashWidth} key={'home-splash'} />,
    ],
    [PAGE.ABOUT]: [
      <AboutHeading width={headingWidth} key={'about-heading'}/>,
      <AboutSplash width={splashWidth} key={'home-splash'} />,
    ],
    [PAGE.PROJECTS]: [
      <ProjectsHeading width={headingWidth} key={'projects-heading'}/>,
      <ProjectsSplash width={splashWidth} key={'home-splash'} />,
    ],
    [PAGE.WORK]: [
      <WorkHeading width={headingWidth} key={'work-heading'}/>,
      <WorkSplash width={splashWidth} key={'home-splash'} />,
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
  const [ Heading, Hero ] = getPageProps(props.page, width ?? screen.width);

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