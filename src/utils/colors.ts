export enum HERO_COLORS {
  FAV_COLOR='#EAF7FBCC',
  FACEBOOK_BLUE='#4267B2CC',
  AMAZON_ORANGE='#FF9900CC',
  BOOZ_ALLEN_TEAL='#01807ECC',
  AL_PURPLE='#ECE5F0',
  AGORA_GREEN='#718F94',
  STORYTIME_BLUE='#1261B0CC',
}

export function id2color (cid: string): HERO_COLORS {
  let color = HERO_COLORS.FAV_COLOR;
  switch (cid) {
    case 'fb':
      color = HERO_COLORS.FACEBOOK_BLUE;
      break;
    case 'aws':
      color = HERO_COLORS.AMAZON_ORANGE;
      break;
    case 'bah':
      color = HERO_COLORS.BOOZ_ALLEN_TEAL;
      break;
    case 'al':
      color = HERO_COLORS.AL_PURPLE;
      break;
    case 'agora':
      color = HERO_COLORS.AGORA_GREEN;
      break;
    case 'fish':
      color = HERO_COLORS.STORYTIME_BLUE;
      break;
    default:
      break;
  }
  return color;
}