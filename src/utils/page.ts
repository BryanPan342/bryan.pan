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