import anime from 'animejs';
import style from '../components/styles/_variables.scss';

export function animate_heading(): void {
  anime({
    targets: '#heading .lines .words',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutExpo',
    duration: 1000,
    fill: [
      {value: style.black, delay: 250, duration: 750, easing: 'easeInExpo' },
    ],
  });
  anime({
    targets: '#heading .lines .dot',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInExpo',
    duration: 1000,
    fill: [
      {value: style.yellow, delay: 250, duration: 750, easing: 'easeInExpo' },
    ],
  });
}

export function animate_description(): void {
  anime({
    targets: '.description',
    easing: 'easeInOutExpo',
    duration: 1000,
    opacity: 0.75,
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
      translateY: style.marginUpTo,
    });
  }
  else {
    anime({
      targets: classes.reduce((acc: string, v: string) => `${acc}.${v}`,''),
      easing: 'easeInOutExpo',
      duration: 1000,
      opacity: classes.includes('contents-description') ? .75 : 1,
      translateX: style.marginLeft,
    });
  }
}

export function animate_routes(): void {
  anime({
    targets: '#routes',
    easing: 'easeInOutExpo',
    duration: 1000,
    opacity: 1,
  });
}

let lock = false;

export function animate_section(top: number, add: boolean): void {
  if (lock) return;
  lock = true;
  const ani = anime({
    targets: '#border-container',
    easing: 'easeInOutExpo',
    duration: 1000,
    scrollTop: top + (add ? (screen.height / 10) : 0),
  });
  void ani.finished.then(() => lock = false);
}