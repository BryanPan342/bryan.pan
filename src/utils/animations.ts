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