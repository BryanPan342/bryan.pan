import React from 'react';
import { HERO_COLORS } from '../../../utils/colors';
import '../../styles/Content.scss';

export interface ContentProps {
  heading: string,
  description: string,
  postDescription?: string,
  idx: number
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
    <div className={`section content-container ${props.idx}`} >
      <div style={{backgroundColor: props.heroColor}} className={`contents-hero ${setWhite ? 'white' : ''}`}>
        <div className={`${props.heading}-${props.idx} contents-heading`}>{props.heading}<a className={'period'}>.</a></div>
        <div className={`${props.heading}-${props.idx} contents-description `}>{props.description}</div>
        { props.postDescription &&
          <div className={`${props.heading}-${props.idx} contents-description`}>{props.postDescription}</div> }
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
export {default as Image} from './Image';