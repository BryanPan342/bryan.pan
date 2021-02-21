import React from 'react';
import { HERO_COLORS } from '../../../utils/colors';
import '../../styles/Content.scss';

export interface ContentProps {
  heading: string,
  description: string,
  postDescription?: string,
  heroColor: HERO_COLORS,
  children: JSX.Element,
}

function Content(props: ContentProps): JSX.Element {
  const setWhite = [
    HERO_COLORS.FACEBOOK_BLUE,
    HERO_COLORS.AGORA_GREEN,
    HERO_COLORS.STORYTIME_BLUE,
  ].includes(props.heroColor);

  return (
    <div className={'section content-container'} >
      <div style={{backgroundColor: props.heroColor}} className={`contents-hero ${setWhite ? 'white' : ''}`}>
        <div className={`${props.heading} contents-heading`}>{props.heading}<a className={'period'}>.</a></div>
        <div className={`${props.heading} contents-description `}>{props.description}</div>
        { props.postDescription &&
          <div className={`${props.heading} contents-description`}>{props.postDescription}</div> }
      </div>
      <div className={'contents-details'}>
        {props.children}
      </div>
    </div>
  );
}

export default Content;
export {default as TextBlock} from './TextBlock';
export {default as TextList} from './TextList';
export {default as Links} from './Links';