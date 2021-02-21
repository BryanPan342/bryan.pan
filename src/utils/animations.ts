import anime from 'animejs';
import style from '../components/styles/_variables.scss';

export function animate_heading(): void {
  anime({
    targets: '#heading .lines .words',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutExpo',
    duration: 1250,
    fill: [
      {value: style.black, delay: 500, duration: 750, easing: 'easeInExpo' },
    ],
  });
  anime({
    targets: '#heading .lines .dot',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInExpo',
    duration: 1250,
    fill: [
      {value: style.yellow, delay: 500, duration: 750, easing: 'easeInExpo' },
    ],
  });
}

export function animate_description(): void {
  anime({
    targets: '.description',
    easing: 'easeInOutExpo',
    duration: 1000,
    opacity: 1,
    translateX: style.marginLeft,
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

export function animate_content(classList: DOMTokenList): void {
  const classes: string[] = [];
  classList.forEach(t => classes.push(t));
  if (classes.includes('details')) {
    anime({
      targets: classes.reduce((acc: string, v: string) => `${acc}.${v}`,''),
      easing: 'easeInOutExpo',
      duration: 1000,
      opacity: 1,
      translateY: [{ value: style.marginUp, direction: 'reverse', duration: 1000 }],
    });
  }
  else {
    anime({
      targets: classes.reduce((acc: string, v: string) => `${acc}.${v}`,''),
      easing: 'easeInOutExpo',
      duration: 1000,
      opacity: 1,
      translateX: style.marginLeft,
    });
  }
}