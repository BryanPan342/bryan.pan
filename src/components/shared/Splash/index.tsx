import React, { useEffect } from 'react';
import {animate_description, animate_heading} from '../../../utils/animations';
import '../../styles/Splash.scss';
import { useWindowSize } from '../../../utils/hooks';

import { AboutHeading } from './About';
import {HomeHeading} from './Home';
import { ProjectsHeading } from './Projects';
import { WorkHeading } from './Work';

export enum PAGE {
  HOME='HOME',
  ABOUT='ABOUT',
  PROJECTS='PROJECTS',
  WORK='WORK',
}

const getPageProps = (page: PAGE, screen_width: number) => {
  const width = screen_width / 4;
  const PAGE_MAP: {[key: string]: JSX.Element[]} = {
    [PAGE.HOME]: [<HomeHeading width={width} key={'heading'}/> ],
    [PAGE.ABOUT]: [<AboutHeading width={width} key={'heading'}/> ],
    [PAGE.PROJECTS]: [<ProjectsHeading width={width} key={'heading'}/> ],
    [PAGE.WORK]: [<WorkHeading width={width} key={'heading'}/> ],
  };
  return PAGE_MAP[page];
};

export interface SplashProps {
  page: PAGE;
  description: string;
}

export interface HeadingProps {
  width: number;
}

function Splash(props: SplashProps): JSX.Element {
  const { width } = useWindowSize();
  const [ Heading ] = getPageProps(props.page, width ?? screen.width);

  useEffect(() => {
    animate_heading();
    animate_description();
  }, []);

  return (
    <div id={'splash-container'}>
      <div id={'headline-container'}>
        <div id={'heading'}>
          { Heading }
        </div>
        <div className={'description'}>{props.description}</div>
      </div>
      <div id={'hero'}></div>
    </div>
  );
}

export default Splash;