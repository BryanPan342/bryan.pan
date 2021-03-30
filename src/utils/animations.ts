import anime from 'animejs';
import style from '../components/styles/_variables.scss';
import { PAGE } from './page';

// SHARED
function animate_up(targets: string, opacity?: number): void {
  anime({
    targets,
    opacity: opacity ?? 1,
    easing: 'easeInOutExpo',
    duration: 1000,
    translateY: style.marginUpTo,
  });
}

function animate_left(targets: string, opacity?: number): void {
  anime({
    targets,
    opacity: opacity ?? 1,
    easing: 'easeInOutExpo',
    duration: 1000,
    translateX: window.innerWidth > 600 ? style.marginLeft : ['-25px', '0px'],
  });
}

// SPLASH
export function animate_heading(page: PAGE): void {
  console.log(page);
  anime({
    targets: `.${page} #heading .lines .words`,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutExpo',
    duration: 1000,
    fill: [
      {value: style.black, delay: 250, duration: 750, easing: 'easeInExpo' },
    ],
  });
  anime({
    targets: `.${page} #heading .lines .dot`,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInExpo',
    duration: 1000,
    fill: [
      {value: style.yellow, delay: 250, duration: 750, easing: 'easeInExpo' },
    ],
  });
}

export function animate_splash(page: PAGE): void {
  anime({
    targets: `.${page} #hero .line`,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutExpo',
    duration: 2000,
  });
  if (page === PAGE.WORK) {
    anime({
      targets: `.${page} #hero .colors`,
      translateY: ['25px', '0px'],
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: 1000,
    });
  }
  else {
    anime({
      targets: `.${page} #hero .colors`,
      translateX: ['25px', '0px'],
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: 1000,
    });
  }
}

export function animate_description(page: PAGE): void {
  animate_left(`.${page} .description`, 0.75);
  animate_left(`.${page} .splash-link`, 0.75);
}

// CONTENT
export function animate_background_image(targets: string): void {
  anime({
    targets,
    duration: 500,
    easing: 'easeInOutExpo',
    backgroundPosition: ['100% 0%', '0% 0%'],
  });
}

export function animate_content(classList: DOMTokenList): void {
  const classes: string[] = [];
  classList.forEach(t => classes.push(t));
  const targets = classes.reduce((acc: string, v: string) => `${acc}.${v}`,'');
  if (classes.includes('contents-hero')) {
    animate_background_image(`#contents-hero-${classes[0]}`);
  }
  else if (classes.includes('details')) {
    animate_up(targets);
  }
  else {
    animate_left(targets, classes.includes('contents-description') ? .75 : 1);
  }
}

// NAV
export function animate_toggle(): void {
  anime({
    targets: '#toggle-container',
    easing: 'easeInOutExpo',
    duration: 1000,
    translateX: 40,
    opacity: 1,
  });
}

export function animate_routes(): void {
  anime({
    targets: '#routes',
    easing: 'easeInOutExpo',
    duration: 1000,
    opacity: 1,
  });
}

export function animate_highlight(): void {
  anime({
    targets: '#highlight',
    easing: 'easeInOutExpo',
    duration: 500,
    scaleX: [0, 1],
  });
}

// PROGRESS
export function animate_progress(): void {
  animate_up('#progress-container');
}