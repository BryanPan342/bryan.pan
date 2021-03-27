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
  const {heading, idx, heroColor} = props;

  const setWhite = [
    HERO_COLORS.FACEBOOK_BLUE,
    HERO_COLORS.AGORA_GREEN,
    HERO_COLORS.STORYTIME_BLUE,
  ].includes(heroColor);

  const background = `linear-gradient(to left, #f8f8f8 50%, ${heroColor} 50%) right`;

  return (
    <div className={`section content-container ${idx}`} >
      <div style={{background: background, backgroundSize: '200%'}} id={`contents-hero-${idx}`} className={`${idx} contents-hero${setWhite ? ' white' : ''}`}>
        <div className={`${heading}-${idx} contents-heading`}>{heading}<a className={'period'}>.</a></div>
        <div className={`${heading}-${idx} contents-description `}>{props.description}</div>
        { props.postDescription &&
          <div className={`${heading}-${idx} contents-description`}>{props.postDescription}</div> }
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
export {default as about} from '../../../assets/content/about.json';
export {default as projects} from '../../../assets/content/projects.json';
export {default as work} from '../../../assets/content/work.json';
export {default as generateContent} from './generateContent';