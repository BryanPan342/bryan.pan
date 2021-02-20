import anime from 'animejs';
import style from '../components/styles/_variables.scss';

export function animate_heading(): void {
  anime({
    targets: '#heading .lines .words',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutExpo',
    duration: 2500,
    fill: [
      {value: style.black, delay: 1500, duration: 500, easing: 'easeInExpo' },
    ],
    delay: 300,
  });
  anime({
    targets: '#heading .lines .dot',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInExpo',
    duration: 1500,
    fill: [
      {value: style.yellow, delay: 1000, duration: 500, easing: 'easeInExpo' },
    ],
    delay: 300,
  });
}

export function animate_description(): void {
  anime({
    targets: '.description',
    easing: 'easeInOutExpo',
    duration: 1200,
    opacity: 1,
    translateX: style.marginLeft,
    delay: 300,
  })
}