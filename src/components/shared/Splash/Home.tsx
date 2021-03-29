import React from 'react';
import { HeadingProps } from './index';

export function HomeHeading(props: HeadingProps): JSX.Element {
  const { width } = props;
  const height = width * .5;

  return (
    <svg width={width} height={height} viewBox="0 0 343 170" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className='lines'>
      <path className='words' stroke-alignment='inner' stroke='#191919' strokeWidth='1' d="M0.7 65.7C3.1 65.7 4.76667 65.5667 5.7 65.3C6.7 64.9667 7.3 64.4667 7.5 63.8C7.76667 63.0667 7.9 61.8333 7.9 60.1V12.1C7.9 10.3 7.76667 9.03333 7.5 8.29999C7.23333 7.56666 6.6 7.06666 5.6 6.8C4.66667 6.46666 3.03333 6.3 0.7 6.3V3H30.3V6.3C27.9667 6.3 26.3 6.46666 25.3 6.8C24.3 7.06666 23.6667 7.56666 23.4 8.29999C23.2 9.03333 23.1 10.3 23.1 12.1V32.5H49.3V12.1C49.3 10.3 49.1667 9.03333 48.9 8.29999C48.6333 7.56666 48 7.06666 47 6.8C46.0667 6.46666 44.4333 6.3 42.1 6.3V3H71.7V6.3C69.3667 6.3 67.7 6.46666 66.7 6.8C65.7 7.06666 65.0667 7.56666 64.8 8.29999C64.6 9.03333 64.5 10.3 64.5 12.1V60.1C64.5 61.8333 64.6333 63.0667 64.9 63.8C65.2333 64.5333 65.8667 65.0333 66.8 65.3C67.8 65.5667 69.4333 65.7 71.7 65.7V69H42.1V65.7C44.5 65.7 46.1667 65.5667 47.1 65.3C48.1 64.9667 48.7 64.4667 48.9 63.8C49.1667 63.0667 49.3 61.8333 49.3 60.1V36.5H23.1V60.1C23.1 61.8333 23.2333 63.0667 23.5 63.8C23.7667 64.5333 24.3667 65.0333 25.3 65.3C26.3 65.5667 27.9667 65.7 30.3 65.7V69H0.7V65.7ZM79.2156 65.7C81.549 65.7 83.1823 65.5667 84.1156 65.3C85.1156 65.0333 85.749 64.5333 86.0156 63.8C86.349 63.0667 86.5156 61.8333 86.5156 60.1V12.1C86.5156 10.3 86.349 9.03333 86.0156 8.29999C85.6823 7.5 85.0156 6.96666 84.0156 6.7C83.0823 6.43333 81.4823 6.3 79.2156 6.3V3H108.916V6.3C106.649 6.3 105.016 6.43333 104.016 6.7C103.082 6.96666 102.449 7.5 102.116 8.29999C101.849 9.03333 101.716 10.3 101.716 12.1V60.1C101.716 61.9 101.849 63.1667 102.116 63.9C102.449 64.6333 103.082 65.1333 104.016 65.4C105.016 65.6 106.649 65.7 108.916 65.7V69H79.2156V65.7ZM120.923 77.8C122.523 77.5333 124.089 76.9 125.623 75.9C127.223 74.9 128.023 73.6667 128.023 72.2C128.023 71.4667 127.856 70.9667 127.523 70.7C127.189 70.4333 126.589 70.1667 125.723 69.9C121.456 68.7 119.323 66.2 119.323 62.4C119.323 60.2 119.989 58.3667 121.323 56.9C122.723 55.3667 124.589 54.6 126.923 54.6C129.123 54.6 130.989 55.3667 132.523 56.9C134.056 58.4333 134.823 60.9 134.823 64.3C134.823 68.5667 133.623 72.2333 131.223 75.3C128.823 78.4333 125.523 80.3 121.323 80.9L120.923 77.8ZM166.52 65.7C168.854 65.7 170.487 65.5667 171.42 65.3C172.42 65.0333 173.054 64.5333 173.32 63.8C173.654 63.0667 173.82 61.8333 173.82 60.1V12.1C173.82 10.3 173.654 9.03333 173.32 8.29999C172.987 7.5 172.32 6.96666 171.32 6.7C170.387 6.43333 168.787 6.3 166.52 6.3V3H196.22V6.3C193.954 6.3 192.32 6.43333 191.32 6.7C190.387 6.96666 189.754 7.5 189.42 8.29999C189.154 9.03333 189.02 10.3 189.02 12.1V60.1C189.02 61.9 189.154 63.1667 189.42 63.9C189.754 64.6333 190.387 65.1333 191.32 65.4C192.32 65.6 193.954 65.7 196.22 65.7V69H166.52V65.7ZM209.327 23.6C210.994 23.3333 212.594 22.7 214.127 21.7C215.661 20.7 216.427 19.4667 216.427 18C216.427 17.2667 216.227 16.7667 215.827 16.5C215.494 16.2333 214.927 15.9667 214.127 15.7C209.861 14.5 207.727 12 207.727 8.2C207.727 6 208.394 4.16666 209.727 2.7C211.127 1.16666 212.994 0.399995 215.327 0.399995C217.527 0.399995 219.394 1.19999 220.927 2.79999C222.461 4.33333 223.227 6.8 223.227 10.2C223.227 14.4 222.027 18.0667 219.627 21.2C217.227 24.2667 213.927 26.1 209.727 26.7L209.327 23.6ZM233.587 65.7H235.587C237.853 65.7 239.287 65.3667 239.887 64.7C240.553 63.9667 240.887 62.5333 240.887 60.4V12C240.887 10.2667 240.72 9.03333 240.387 8.29999C240.12 7.56666 239.487 7.06666 238.487 6.8C237.487 6.53333 235.82 6.36666 233.487 6.3V3H256.587L274.087 48H274.287L291.587 3H313.687V6.3C311.42 6.36666 309.787 6.53333 308.787 6.8C307.853 7.06666 307.22 7.56666 306.887 8.29999C306.62 9.03333 306.487 10.2667 306.487 12V60.1C306.487 61.7667 306.62 63 306.887 63.8C307.22 64.5333 307.887 65.0333 308.887 65.3C309.887 65.5667 311.487 65.7 313.687 65.7V69H284.587V65.7C286.787 65.7 288.353 65.5667 289.287 65.3C290.22 64.9667 290.82 64.4333 291.087 63.7C291.353 62.9667 291.487 61.7667 291.487 60.1V13.8H291.287L270.987 67.6H265.987L245.287 14.4H245.087V60.4C245.087 61.9333 245.22 63.0667 245.487 63.8C245.753 64.5333 246.253 65.0333 246.987 65.3C247.72 65.5667 248.92 65.7 250.587 65.7H253.587V69H233.587V65.7ZM0.7 165.7C2.9 165.7 4.5 165.567 5.5 165.3C6.5 164.967 7.16667 164.433 7.5 163.7C7.83333 162.9 8 161.7 8 160.1V112.1C8 110.3 7.83333 109.033 7.5 108.3C7.16667 107.5 6.5 106.967 5.5 106.7C4.56667 106.433 2.96667 106.3 0.7 106.3V103H31.8C48 103 56.1 108.067 56.1 118.2C56.1 122.2 54.8333 125.467 52.3 128C49.8333 130.533 46.2 132.3 41.4 133.3V133.4C53.0667 135.4 58.9 141.367 58.9 151.3C58.9 163.1 50.2333 169 32.9 169H0.7V165.7ZM28.2 131.9C32.4667 131.9 35.7 130.8 37.9 128.6C40.1667 126.4 41.3 123.233 41.3 119.1C41.3 110.9 36.9667 106.8 28.3 106.8C26.1 106.8 24.7 107.067 24.1 107.6C23.5 108.067 23.2 109.133 23.2 110.8V131.9H28.2ZM30.2 165.2C38.7333 165.2 43 160.6 43 151.4C43 146.467 41.7333 142.633 39.2 139.9C36.6667 137.167 33.0667 135.8 28.4 135.8H23.2V158.7C23.2 161.167 23.7 162.867 24.7 163.8C25.7 164.733 27.5333 165.2 30.2 165.2ZM65.7391 165.7C68.0724 165.7 69.7057 165.567 70.6391 165.3C71.6391 165.033 72.2724 164.533 72.5391 163.8C72.8724 163.067 73.0391 161.833 73.0391 160.1V112C73.0391 110.267 72.8724 109.033 72.5391 108.3C72.2057 107.5 71.5391 106.967 70.5391 106.7C69.6057 106.433 68.0057 106.3 65.7391 106.3V103H96.5391C112.739 103 120.839 108.4 120.839 119.2C120.839 123.933 119.339 127.7 116.339 130.5C113.339 133.233 109.372 135 104.439 135.8V136C108.572 136.8 111.506 138.333 113.239 140.6C115.039 142.8 116.372 146.233 117.239 150.9L118.139 155.1C118.939 158.9 119.939 161.633 121.139 163.3C122.406 164.9 124.439 165.7 127.239 165.7V169H108.839C107.906 168.267 107.039 167.067 106.239 165.4C105.439 163.733 104.806 161.867 104.339 159.8L101.339 146C100.806 143.467 99.8724 141.567 98.5391 140.3C97.2724 139.033 95.4057 138.4 92.9391 138.4H88.2391V160.1C88.2391 161.767 88.3724 163 88.6391 163.8C88.9724 164.533 89.6057 165.033 90.5391 165.3C91.5391 165.567 93.1057 165.7 95.2391 165.7V169H65.7391V165.7ZM92.3391 134.4C96.8724 134.4 100.206 133.3 102.339 131.1C104.472 128.833 105.539 125.3 105.539 120.5C105.539 115.833 104.506 112.4 102.439 110.2C100.439 107.933 97.2391 106.8 92.8391 106.8C90.9724 106.8 89.7391 107.067 89.1391 107.6C88.5391 108.067 88.2391 109.033 88.2391 110.5V134.4H92.3391ZM185.723 103V106.3C183.257 106.3 181.423 106.733 180.223 107.6C179.09 108.467 177.89 110.167 176.623 112.7L161.523 142.5V160C161.523 161.733 161.69 163 162.023 163.8C162.423 164.533 163.157 165.033 164.223 165.3C165.29 165.567 167.057 165.7 169.523 165.7V169H138.823V165.7C141.29 165.7 143.023 165.567 144.023 165.3C145.09 165.033 145.757 164.533 146.023 163.8C146.357 163 146.523 161.733 146.523 160V143.6L130.423 111.3C129.423 109.3 128.423 107.967 127.423 107.3C126.423 106.633 124.657 106.3 122.123 106.3V103H153.323V106.3H149.023C147.357 106.3 146.523 106.967 146.523 108.3C146.523 109.167 146.79 110.167 147.323 111.3L159.623 137.3H159.823L171.523 112.2C172.057 110.933 172.323 109.933 172.323 109.2C172.323 108.267 172.023 107.567 171.423 107.1C170.823 106.567 170.057 106.3 169.123 106.3H165.423V103H185.723ZM240.05 160.7C240.65 162.233 241.183 163.333 241.65 164C242.183 164.667 242.883 165.133 243.75 165.4C244.617 165.6 245.983 165.7 247.85 165.7V169H217.85V165.7H222.55C224.35 165.7 225.25 164.933 225.25 163.4C225.25 162.8 225.15 162.167 224.95 161.5L219.25 145.6H198.65L192.95 161.8C192.75 162.467 192.65 163.067 192.65 163.6C192.65 164.333 192.85 164.867 193.25 165.2C193.717 165.533 194.483 165.7 195.55 165.7H199.75V169H178.95V165.7C181.683 165.7 183.617 165.367 184.75 164.7C185.883 163.967 186.883 162.467 187.75 160.2L209.75 103H219.25L240.05 160.7ZM217.95 141.9L209.05 117.2H208.75L199.95 141.9H217.95ZM264.148 115.3H263.948V160.5C263.948 162.367 264.315 163.7 265.048 164.5C265.782 165.3 267.082 165.7 268.948 165.7H272.448V169H252.448V165.7H255.048C256.648 165.7 257.815 165.3 258.548 164.5C259.348 163.633 259.748 162.3 259.748 160.5V112C259.748 110.267 259.582 109.033 259.248 108.3C258.982 107.567 258.348 107.067 257.348 106.8C256.348 106.533 254.682 106.367 252.348 106.3V103H274.248L305.248 150.9H305.548V111.1C305.548 107.9 303.848 106.3 300.448 106.3H296.948V103H316.748V106.3H314.348C311.282 106.3 309.748 107.9 309.748 111.1V169.7H299.748L264.148 115.3Z" fill="none"/>
      <path className='dot' stroke-alignment='inner' stroke='#FEC600' strokeWidth='1' d="M334.847 169.9C332.78 169.9 330.98 169.167 329.447 167.7C327.98 166.167 327.247 164.367 327.247 162.3C327.247 160.233 327.98 158.433 329.447 156.9C330.98 155.367 332.78 154.6 334.847 154.6C336.98 154.6 338.78 155.367 340.247 156.9C341.78 158.367 342.547 160.167 342.547 162.3C342.547 164.433 341.78 166.233 340.247 167.7C338.78 169.167 336.98 169.9 334.847 169.9Z" fill="none"/>
    </g>
    </svg>
  );
}

export function HomeSplash(props: HeadingProps): JSX.Element {
  const { width } = props;
  const height = width * 1.4;

  return (
    <svg width={width} height={height} viewBox="0 0 332 465" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='colors' d="M188.671 36.525C169.647 48.3938 159.5 72.9188 164.551 94.7663C159.241 89.7263 149.521 93.3263 146.506 99.9975C143.491 106.669 145.516 114.589 148.925 121.069C161.817 145.549 193.216 159.803 197.007 187.219C199.302 203.88 188.649 221.441 172.797 227.078C165.789 229.575 157.452 230.306 152.784 236.1C144.29 246.619 155.214 263.696 148.486 275.419C143.255 284.531 130.542 285.319 120.102 284.171C109.662 283.024 97.6925 281.505 89.9075 288.559C80.1087 297.446 83.6187 313.388 88.3662 325.729C94.3175 341.22 101.034 356.453 105.849 372.338C112.182 393.206 115.186 414.953 117.009 436.699C117.357 440.884 117.875 445.519 120.991 448.331C122.802 449.974 125.232 450.716 127.606 451.313C147.541 456.263 168.455 453.068 188.907 451.076C226.212 447.431 263.922 447.893 301.126 452.438C304.659 452.865 309.012 452.978 310.914 449.963C312.354 447.679 311.589 444.709 310.734 442.144C305.514 426.506 298.381 411.499 289.561 397.571C282.744 386.794 274.509 376.32 263.112 370.594C251.716 364.856 236.529 365.07 227.461 374.036C231.871 357.611 224.412 338.273 209.292 330.476C194.184 322.68 172.966 328.789 165.642 344.134C165.305 313.174 179.997 284.284 194.33 256.845C213.624 219.878 252.222 163.796 252.222 145.931C252.222 141.488 243.346 146.325 238.914 146.516C243.605 136.076 256.542 125.423 246.237 120.81C241.074 118.504 241.85 117.356 236.731 119.741C242.401 109.481 259.254 94.44 253.752 88.95C245.54 84.5625 236.506 88.4888 231.905 93.8888C228.631 90.8738 234.346 89.9288 237.08 86.4075C239.814 82.8975 242.975 78.2738 240.747 74.415C238.374 70.32 232.366 71.1413 227.72 72.0413C223.074 72.9413 216.571 72.0525 216.054 67.35C215.401 61.4325 227.652 55.3575 222.804 51.9038C216.886 47.6738 208.482 49.3275 201.316 48.045C205.141 44.5013 211.835 39.7088 209.619 34.9838C205.602 26.4338 190.032 33.7238 188.671 36.525Z" fill="#FFAA33"/>
      <path className='line' d="M108.391 147.473C91.3364 135.244 69.0951 130.496 48.5301 134.704C58.5089 135.053 62.5251 136.92 70.5464 138.034C78.5789 139.148 88.1301 144.019 94.3626 149.216C100.595 154.414 103.441 164.528 98.2326 170.749C84.9014 171.379 71.3789 166.789 61.1976 158.149C70.6026 153.401 82.8651 155.01 80.5701 163.076C78.7926 167.239 70.6701 164.179 71.2776 159.701C71.8851 155.224 85.7001 157.609 89.8401 159.431C93.9801 161.254 96.4101 165.608 97.8389 169.894C101.011 179.366 100.573 190.234 95.5776 198.896C90.5939 207.559 80.7951 213.555 70.8276 212.948C67.6551 207.671 75.8001 201.743 81.6164 203.768C87.4326 205.793 90.8639 211.598 95.0826 216.086C103.149 224.681 117.695 228.641 126.74 221.104C127.741 220.271 128.675 219.259 128.979 217.999C129.89 214.174 123.421 211.969 121.003 215.074C118.584 218.168 120.463 223.106 123.86 225.075C129.001 228.068 136.584 225.008 138.204 219.281C142.198 205.185 124.715 202.125 124.805 187.478C124.85 180.469 130.059 175.024 136.989 174C143.919 172.976 143.48 171.874 150.118 174.113C160.378 177.578 171.403 181.616 177.286 190.706C164.214 192.608 150.354 187.905 141.118 178.455C145.494 173.235 155.27 174.563 158.105 180.75C155.36 185.959 147.058 186.33 143.064 182.01C139.07 177.679 139.43 170.456 142.94 165.731C146.45 161.006 152.424 158.599 158.296 158.171C174.26 157.013 188.041 168.476 199.888 179.231C185.544 169.421 167.836 164.651 150.511 165.934C147.226 166.181 143.334 166.384 141.298 163.796C139.34 161.321 140.274 157.721 141.433 154.785C147.451 139.609 157.509 126.053 170.3 115.905C175.486 111.788 181.775 108.064 188.323 109.031C200.563 110.831 204.5 126.289 205.659 138.608C207.504 158.228 209.338 178.084 206.334 197.558C204.691 208.211 201.44 218.944 194.589 227.269C187.738 235.594 176.701 241.05 166.115 239.036C155.529 237.023 146.743 226.11 149.094 215.58C151.513 204.724 165.114 198.66 175.509 202.62C185.904 206.58 192.024 218.438 191.124 229.519C190.213 240.6 183.26 250.579 174.26 257.115C165.26 263.651 154.37 267.094 143.458 269.22C127.64 272.314 110.979 272.786 95.6451 267.814C80.3114 262.83 66.4626 251.861 60.5226 236.876C83.3039 232.084 107.694 235.403 128.371 246.079C131.206 247.541 134.165 249.353 135.391 252.3C138.238 259.151 130.239 265.373 123.388 268.219C114.376 271.954 104.375 275.07 94.9926 272.393C85.6101 269.704 78.0614 258.904 82.1789 250.061C85.7789 242.31 96.7139 240.105 104.33 243.986C111.946 247.868 116.458 256.125 118.404 264.45C120.586 273.743 120.024 283.901 115.524 292.328C111.024 300.743 102.249 307.099 92.7089 307.414C87.5901 307.583 81.9652 305.681 79.5014 301.193C77.0377 296.704 79.6589 289.74 84.7664 289.403C87.4551 289.223 89.9976 290.82 91.7526 292.856C96.3314 298.189 96.1402 306.964 91.3477 312.094C89.3902 314.186 86.8026 315.705 85.1714 318.068C79.8501 325.751 87.3089 335.426 91.5726 343.74C95.4651 351.334 96.6689 360.289 94.9139 368.636C94.4189 371.021 93.5751 373.508 91.6514 375.004C87.7926 377.985 81.7176 374.97 79.8389 370.47C77.9489 365.97 75.2939 357.398 79.9851 356.081C97.9064 351.075 94.5201 390.754 89.1089 408.551C83.7089 426.36 72.3014 441.626 61.1076 456.488C57.7214 460.988 52.0851 465.994 47.2814 463.058C45.3239 461.865 44.2776 459.66 43.3889 457.545C24.6914 413.546 27.7964 363.878 26.8064 316.076C25.3214 243.593 13.7114 170.996 21.3051 98.895C22.9476 83.3363 23.3301 65.3475 35.7051 54.9188C38.5289 52.5338 37.0439 62.1863 37.7189 65.82C43.9514 45.3113 65.8326 20.6288 76.2951 16.1625C80.9076 14.1938 76.1714 26.1863 76.1039 31.2038C91.5614 16.1175 127.258 -3.88498 133.141 2.67377C135.898 5.73377 128.754 9.64877 126.56 13.1363C141.759 10.4925 161.39 6.00377 172.618 12.8888C178.366 16.41 161.581 20.8313 158.026 26.5575C165.103 26.0513 172.179 25.5563 179.255 25.05C183.676 24.735 188.57 24.5663 192.001 27.3675C195.433 30.1688 195.185 37.0875 190.831 37.9088C198.245 41.1825 205.659 44.4675 213.084 47.7413C214.771 48.4838 216.751 49.6763 216.639 51.5213C216.56 52.905 215.3 53.8838 214.468 54.9975C211.329 59.25 214.771 65.4488 219.26 68.25C223.749 71.0513 229.25 72.1763 233.199 75.6863C237.148 79.1963 238.183 86.835 233.379 89.0288C239.566 87.9038 245.911 94.0913 244.921 100.301C244.246 104.588 240.86 107.963 239.555 112.114C238.25 116.265 241.186 122.295 245.315 120.945C240.995 126.829 236.563 134.648 240.286 140.925C241.31 142.646 242.874 144.064 243.504 145.954C244.089 147.731 243.74 149.678 243.358 151.511C236.968 181.706 219.586 209.46 195.208 228.394C191.709 223.174 195.365 215.265 201.328 213.285C207.29 211.305 214.085 214.309 218.011 219.225C221.926 224.141 223.423 230.565 223.906 236.831C224.446 243.728 223.704 251.175 219.35 256.541C214.996 261.908 206.075 263.899 201.08 259.106C198.56 256.688 197.503 253.133 196.85 249.69C190.303 215.108 214.456 180.323 208.539 145.628C204.95 124.568 190.213 106.421 171.808 95.565C153.403 84.7088 131.668 80.5575 110.304 80.2875C98.9526 80.1413 87.2301 81.1425 77.1276 86.3063C58.3964 95.8913 49.2389 117.48 44.6264 138.011C40.0139 158.543 38.2701 180.244 28.0439 198.638C25.3326 203.509 20.2251 208.684 15.0614 206.625C13.0026 205.804 11.5401 203.97 10.2689 202.159C3.1589 192.045 -1.07111 178.939 2.78764 167.194C4.83514 160.973 11.5401 154.875 17.3114 157.98C19.1901 158.993 20.4951 160.804 21.6089 162.626C36.2226 186.634 25.8276 217.144 22.5989 245.066C21.9126 250.95 21.6089 257.081 23.6676 262.628C25.8951 268.635 30.6201 273.304 35.2101 277.77C43.3214 285.656 51.4439 293.543 59.5551 301.44C65.8214 307.526 72.3689 313.793 80.6264 316.628C89.3339 319.609 98.9189 318.394 107.851 316.2C142.479 307.684 173.18 284.273 190.561 253.121C181.471 279.818 174.834 307.346 170.761 335.246C168.129 353.28 166.543 371.561 161.683 389.123C156.823 406.684 148.295 423.84 134.221 435.416C131.96 411.465 145.584 389.213 158.668 369.019C165.541 358.41 172.415 347.801 179.289 337.193C184.554 329.07 192.733 319.789 201.969 322.691C206.12 323.996 209.113 327.551 211.7 331.05C222.759 345.99 230.983 363.034 235.775 381C238.509 391.226 239.803 403.185 233.21 411.465C228.575 417.293 220.993 419.936 213.635 421.073C201.384 422.963 188.615 421.41 177.185 416.629C174.755 415.616 172.314 414.401 170.638 412.376C166.228 407.055 168.995 398.854 173.236 393.386C185.926 377.006 207.92 371.561 228.294 367.793C243.875 364.913 260.784 362.573 274.88 369.806C282.868 373.901 289.078 380.685 295.119 387.323C307.156 400.564 319.194 413.805 331.231 427.046" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
    </svg>
  );
}