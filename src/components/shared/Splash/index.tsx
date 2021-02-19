import React, { useEffect } from 'react';
import {HomeHeading} from './Home';
import {animate_heading} from '../../../utils/animations';
import '../../styles/Splash.scss';
import { useWindowSize } from '../../../utils/hooks';

export enum PAGE {
  HOME='HOME',
  ABOUT='ABOUT',
  PROJECTS='PROJECTS',
  WORK='WORK',
}

const getPageProps = (page: PAGE, screen_width: number) => {
  const width = screen_width / 4;
  const height = width * .61;
  const PAGE_MAP: {[key: string]: JSX.Element[]} = {
    [PAGE.HOME]: [<HomeHeading width={width} height={height}/> ],
  };
  return PAGE_MAP[page];
}

export interface SplashProps {
  page: PAGE;
  description: string;
}

export interface HeadingProps {
  width: number;
  height: number;
}

function Splash(props: SplashProps): JSX.Element {
  const {width, height} = useWindowSize();
  const [ Heading ] = getPageProps(props.page, width ?? screen.width);

  useEffect(() => {
    animate_heading();
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