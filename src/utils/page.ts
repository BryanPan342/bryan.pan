export enum PAGE {
  HOME='HOME',
  ABOUT='ABOUT',
  PROJECTS='PROJECTS',
  WORK='WORK',
}

export function path2Page (path: string): PAGE {
  switch (path) {
    case '/about':
      return PAGE.ABOUT;
    case '/projects':
      return PAGE.PROJECTS;
    case '/work':
      return PAGE.WORK;
    default:
      return PAGE.HOME;
  }
}

export function getIdealDims(width: number, height: number, multiplier: number): number[] {
  const t_height = width * multiplier;
  const t_width = height / multiplier;

  return width * t_height > height * t_width ? [width, t_height] : [t_width, height];
}