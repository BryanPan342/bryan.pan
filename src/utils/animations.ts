import anime from 'animejs';
import style from '../components/styles/_variables.scss';

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
    translateX: style.marginLeft,
  });
}

// SPLASH
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

// CONTENT
export function animate_description(): void {
  animate_left('.description', 0.75);
}

export function animate_content(classList: DOMTokenList): void {
  const classes: string[] = [];
  classList.forEach(t => classes.push(t));
  const targets = classes.reduce((acc: string, v: string) => `${acc}.${v}`,'');
  if (classes.includes('details')) {
    animate_up(targets);
  }
  else {
    animate_left(targets, classes.includes('contents-description') ? .75 : 1);
  }
}

// LAYOUT
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