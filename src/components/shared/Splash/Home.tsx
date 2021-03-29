import React from 'react';
import { HeadingProps } from './index';

export function HomeHeading(props: HeadingProps): JSX.Element {
  const { width } = props;
  const height = width * .66;

  return (
    <svg width={width} height={height} viewBox="0 0 343 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className='lines'>
        <path className='words' stroke-alignment='inner' stroke='#191919' strokeWidth='1' d="M5.36211 65.7C7.76211 65.7 9.42878 65.5667 10.3621 65.3C11.3621 64.9667 11.9621 64.4667 12.1621 63.8C12.4288 63.0667 12.5621 61.8333 12.5621 60.1V12.1C12.5621 10.3 12.4288 9.03333 12.1621 8.29999C11.8954 7.56666 11.2621 7.06666 10.2621 6.8C9.32878 6.46666 7.69544 6.3 5.36211 6.3V3H34.9621V6.3C32.6288 6.3 30.9621 6.46666 29.9621 6.8C28.9621 7.06666 28.3288 7.56666 28.0621 8.29999C27.8621 9.03333 27.7621 10.3 27.7621 12.1V32.5H53.9621V12.1C53.9621 10.3 53.8288 9.03333 53.5621 8.29999C53.2954 7.56666 52.6621 7.06666 51.6621 6.8C50.7288 6.46666 49.0954 6.3 46.7621 6.3V3H76.3621V6.3C74.0288 6.3 72.3621 6.46666 71.3621 6.8C70.3621 7.06666 69.7288 7.56666 69.4621 8.29999C69.2621 9.03333 69.1621 10.3 69.1621 12.1V60.1C69.1621 61.8333 69.2954 63.0667 69.5621 63.8C69.8954 64.5333 70.5288 65.0333 71.4621 65.3C72.4621 65.5667 74.0954 65.7 76.3621 65.7V69H46.7621V65.7C49.1621 65.7 50.8288 65.5667 51.7621 65.3C52.7621 64.9667 53.3621 64.4667 53.5621 63.8C53.8288 63.0667 53.9621 61.8333 53.9621 60.1V36.5H27.7621V60.1C27.7621 61.8333 27.8954 63.0667 28.1621 63.8C28.4288 64.5333 29.0288 65.0333 29.9621 65.3C30.9621 65.5667 32.6288 65.7 34.9621 65.7V69H5.36211V65.7ZM83.8777 65.7C86.2111 65.7 87.8444 65.5667 88.7777 65.3C89.7777 65.0333 90.4111 64.5333 90.6777 63.8C91.0111 63.0667 91.1777 61.8333 91.1777 60.1V12.1C91.1777 10.3 91.0111 9.03333 90.6777 8.29999C90.3444 7.5 89.6777 6.96666 88.6777 6.7C87.7444 6.43333 86.1444 6.3 83.8777 6.3V3H113.578V6.3C111.311 6.3 109.678 6.43333 108.678 6.7C107.744 6.96666 107.111 7.5 106.778 8.29999C106.511 9.03333 106.378 10.3 106.378 12.1V60.1C106.378 61.9 106.511 63.1667 106.778 63.9C107.111 64.6333 107.744 65.1333 108.678 65.4C109.678 65.6 111.311 65.7 113.578 65.7V69H83.8777V65.7ZM125.585 77.8C127.185 77.5333 128.751 76.9 130.285 75.9C131.885 74.9 132.685 73.6667 132.685 72.2C132.685 71.4667 132.518 70.9667 132.185 70.7C131.851 70.4333 131.251 70.1667 130.385 69.9C126.118 68.7 123.985 66.2 123.985 62.4C123.985 60.2 124.651 58.3667 125.985 56.9C127.385 55.3667 129.251 54.6 131.585 54.6C133.785 54.6 135.651 55.3667 137.185 56.9C138.718 58.4333 139.485 60.9 139.485 64.3C139.485 68.5667 138.285 72.2333 135.885 75.3C133.485 78.4333 130.185 80.3 125.985 80.9L125.585 77.8ZM171.182 65.7C173.516 65.7 175.149 65.5667 176.082 65.3C177.082 65.0333 177.716 64.5333 177.982 63.8C178.316 63.0667 178.482 61.8333 178.482 60.1V12.1C178.482 10.3 178.316 9.03333 177.982 8.29999C177.649 7.5 176.982 6.96666 175.982 6.7C175.049 6.43333 173.449 6.3 171.182 6.3V3H200.882V6.3C198.616 6.3 196.982 6.43333 195.982 6.7C195.049 6.96666 194.416 7.5 194.082 8.29999C193.816 9.03333 193.682 10.3 193.682 12.1V60.1C193.682 61.9 193.816 63.1667 194.082 63.9C194.416 64.6333 195.049 65.1333 195.982 65.4C196.982 65.6 198.616 65.7 200.882 65.7V69H171.182V65.7ZM213.989 23.6C215.656 23.3333 217.256 22.7 218.789 21.7C220.323 20.7 221.089 19.4667 221.089 18C221.089 17.2667 220.889 16.7667 220.489 16.5C220.156 16.2333 219.589 15.9667 218.789 15.7C214.523 14.5 212.389 12 212.389 8.2C212.389 6 213.056 4.16666 214.389 2.7C215.789 1.16666 217.656 0.399995 219.989 0.399995C222.189 0.399995 224.056 1.19999 225.589 2.79999C227.123 4.33333 227.889 6.8 227.889 10.2C227.889 14.4 226.689 18.0667 224.289 21.2C221.889 24.2667 218.589 26.1 214.389 26.7L213.989 23.6ZM238.249 65.7H240.249C242.515 65.7 243.949 65.3667 244.549 64.7C245.215 63.9667 245.549 62.5333 245.549 60.4V12C245.549 10.2667 245.382 9.03333 245.049 8.29999C244.782 7.56666 244.149 7.06666 243.149 6.8C242.149 6.53333 240.482 6.36666 238.149 6.3V3H261.249L278.749 48H278.949L296.249 3H318.349V6.3C316.082 6.36666 314.449 6.53333 313.449 6.8C312.515 7.06666 311.882 7.56666 311.549 8.29999C311.282 9.03333 311.149 10.2667 311.149 12V60.1C311.149 61.7667 311.282 63 311.549 63.8C311.882 64.5333 312.549 65.0333 313.549 65.3C314.549 65.5667 316.149 65.7 318.349 65.7V69H289.249V65.7C291.449 65.7 293.015 65.5667 293.949 65.3C294.882 64.9667 295.482 64.4333 295.749 63.7C296.015 62.9667 296.149 61.7667 296.149 60.1V13.8H295.949L275.649 67.6H270.649L249.949 14.4H249.749V60.4C249.749 61.9333 249.882 63.0667 250.149 63.8C250.415 64.5333 250.915 65.0333 251.649 65.3C252.382 65.5667 253.582 65.7 255.249 65.7H258.249V69H238.249V65.7ZM0.332813 194.7C2.53281 194.7 4.13281 194.567 5.13281 194.3C6.13281 193.967 6.79948 193.433 7.13281 192.7C7.46615 191.9 7.63281 190.7 7.63281 189.1V141.1C7.63281 139.3 7.46615 138.033 7.13281 137.3C6.79948 136.5 6.13281 135.967 5.13281 135.7C4.19948 135.433 2.59948 135.3 0.332813 135.3V132H31.4328C47.6328 132 55.7328 137.067 55.7328 147.2C55.7328 151.2 54.4661 154.467 51.9328 157C49.4661 159.533 45.8328 161.3 41.0328 162.3V162.4C52.6995 164.4 58.5328 170.367 58.5328 180.3C58.5328 192.1 49.8661 198 32.5328 198H0.332813V194.7ZM27.8328 160.9C32.0995 160.9 35.3328 159.8 37.5328 157.6C39.7995 155.4 40.9328 152.233 40.9328 148.1C40.9328 139.9 36.5995 135.8 27.9328 135.8C25.7328 135.8 24.3328 136.067 23.7328 136.6C23.1328 137.067 22.8328 138.133 22.8328 139.8V160.9H27.8328ZM29.8328 194.2C38.3661 194.2 42.6328 189.6 42.6328 180.4C42.6328 175.467 41.3661 171.633 38.8328 168.9C36.2995 166.167 32.6995 164.8 28.0328 164.8H22.8328V187.7C22.8328 190.167 23.3328 191.867 24.3328 192.8C25.3328 193.733 27.1661 194.2 29.8328 194.2ZM65.3719 194.7C67.7052 194.7 69.3385 194.567 70.2719 194.3C71.2719 194.033 71.9052 193.533 72.1719 192.8C72.5052 192.067 72.6719 190.833 72.6719 189.1V141C72.6719 139.267 72.5052 138.033 72.1719 137.3C71.8385 136.5 71.1719 135.967 70.1719 135.7C69.2385 135.433 67.6385 135.3 65.3719 135.3V132H96.1719C112.372 132 120.472 137.4 120.472 148.2C120.472 152.933 118.972 156.7 115.972 159.5C112.972 162.233 109.005 164 104.072 164.8V165C108.205 165.8 111.139 167.333 112.872 169.6C114.672 171.8 116.005 175.233 116.872 179.9L117.772 184.1C118.572 187.9 119.572 190.633 120.772 192.3C122.039 193.9 124.072 194.7 126.872 194.7V198H108.472C107.539 197.267 106.672 196.067 105.872 194.4C105.072 192.733 104.439 190.867 103.972 188.8L100.972 175C100.439 172.467 99.5052 170.567 98.1719 169.3C96.9052 168.033 95.0385 167.4 92.5719 167.4H87.8719V189.1C87.8719 190.767 88.0052 192 88.2719 192.8C88.6052 193.533 89.2385 194.033 90.1719 194.3C91.1719 194.567 92.7385 194.7 94.8719 194.7V198H65.3719V194.7ZM91.9719 163.4C96.5052 163.4 99.8385 162.3 101.972 160.1C104.105 157.833 105.172 154.3 105.172 149.5C105.172 144.833 104.139 141.4 102.072 139.2C100.072 136.933 96.8719 135.8 92.4719 135.8C90.6052 135.8 89.3719 136.067 88.7719 136.6C88.1719 137.067 87.8719 138.033 87.8719 139.5V163.4H91.9719ZM185.356 132V135.3C182.89 135.3 181.056 135.733 179.856 136.6C178.723 137.467 177.523 139.167 176.256 141.7L161.156 171.5V189C161.156 190.733 161.323 192 161.656 192.8C162.056 193.533 162.79 194.033 163.856 194.3C164.923 194.567 166.69 194.7 169.156 194.7V198H138.456V194.7C140.923 194.7 142.656 194.567 143.656 194.3C144.723 194.033 145.39 193.533 145.656 192.8C145.99 192 146.156 190.733 146.156 189V172.6L130.056 140.3C129.056 138.3 128.056 136.967 127.056 136.3C126.056 135.633 124.29 135.3 121.756 135.3V132H152.956V135.3H148.656C146.99 135.3 146.156 135.967 146.156 137.3C146.156 138.167 146.423 139.167 146.956 140.3L159.256 166.3H159.456L171.156 141.2C171.69 139.933 171.956 138.933 171.956 138.2C171.956 137.267 171.656 136.567 171.056 136.1C170.456 135.567 169.69 135.3 168.756 135.3H165.056V132H185.356ZM239.683 189.7C240.283 191.233 240.816 192.333 241.283 193C241.816 193.667 242.516 194.133 243.383 194.4C244.249 194.6 245.616 194.7 247.483 194.7V198H217.483V194.7H222.183C223.983 194.7 224.883 193.933 224.883 192.4C224.883 191.8 224.783 191.167 224.583 190.5L218.883 174.6H198.283L192.583 190.8C192.383 191.467 192.283 192.067 192.283 192.6C192.283 193.333 192.483 193.867 192.883 194.2C193.349 194.533 194.116 194.7 195.183 194.7H199.383V198H178.583V194.7C181.316 194.7 183.249 194.367 184.383 193.7C185.516 192.967 186.516 191.467 187.383 189.2L209.383 132H218.883L239.683 189.7ZM217.583 170.9L208.683 146.2H208.383L199.583 170.9H217.583ZM263.781 144.3H263.581V189.5C263.581 191.367 263.948 192.7 264.681 193.5C265.415 194.3 266.715 194.7 268.581 194.7H272.081V198H252.081V194.7H254.681C256.281 194.7 257.448 194.3 258.181 193.5C258.981 192.633 259.381 191.3 259.381 189.5V141C259.381 139.267 259.215 138.033 258.881 137.3C258.615 136.567 257.981 136.067 256.981 135.8C255.981 135.533 254.315 135.367 251.981 135.3V132H273.881L304.881 179.9H305.181V140.1C305.181 136.9 303.481 135.3 300.081 135.3H296.581V132H316.381V135.3H313.981C310.915 135.3 309.381 136.9 309.381 140.1V198.7H299.381L263.781 144.3Z" fill="none"/>
        <path className='dot' stroke-alignment='inner' stroke='#FEC600' strokeWidth='1' d="M334.48 198.9C332.413 198.9 330.613 198.167 329.08 196.7C327.613 195.167 326.88 193.367 326.88 191.3C326.88 189.233 327.613 187.433 329.08 185.9C330.613 184.367 332.413 183.6 334.48 183.6C336.613 183.6 338.413 184.367 339.88 185.9C341.413 187.367 342.18 189.167 342.18 191.3C342.18 193.433 341.413 195.233 339.88 196.7C338.413 198.167 336.613 198.9 334.48 198.9Z" fill="none"/>
      </g>
    </svg>
  );
}

export function HomeSplash(props: HeadingProps): JSX.Element {
  const { width } = props;
  const height = width * .66;

  return (
    <svg width="332" height="465" viewBox="0 0 332 465" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='colors' d="M188.671 36.525C169.647 48.3938 159.5 72.9188 164.551 94.7663C159.241 89.7263 149.521 93.3263 146.506 99.9975C143.491 106.669 145.516 114.589 148.925 121.069C161.817 145.549 193.216 159.803 197.007 187.219C199.302 203.88 188.649 221.441 172.797 227.078C165.789 229.575 157.452 230.306 152.784 236.1C144.29 246.619 155.214 263.696 148.486 275.419C143.255 284.531 130.542 285.319 120.102 284.171C109.662 283.024 97.6925 281.505 89.9075 288.559C80.1087 297.446 83.6187 313.388 88.3662 325.729C94.3175 341.22 101.034 356.453 105.849 372.338C112.182 393.206 115.186 414.953 117.009 436.699C117.357 440.884 117.875 445.519 120.991 448.331C122.802 449.974 125.232 450.716 127.606 451.313C147.541 456.263 168.455 453.068 188.907 451.076C226.212 447.431 263.922 447.893 301.126 452.438C304.659 452.865 309.012 452.978 310.914 449.963C312.354 447.679 311.589 444.709 310.734 442.144C305.514 426.506 298.381 411.499 289.561 397.571C282.744 386.794 274.509 376.32 263.112 370.594C251.716 364.856 236.529 365.07 227.461 374.036C231.871 357.611 224.412 338.273 209.292 330.476C194.184 322.68 172.966 328.789 165.642 344.134C165.305 313.174 179.997 284.284 194.33 256.845C213.624 219.878 252.222 163.796 252.222 145.931C252.222 141.488 243.346 146.325 238.914 146.516C243.605 136.076 256.542 125.423 246.237 120.81C241.074 118.504 241.85 117.356 236.731 119.741C242.401 109.481 259.254 94.44 253.752 88.95C245.54 84.5625 236.506 88.4888 231.905 93.8888C228.631 90.8738 234.346 89.9288 237.08 86.4075C239.814 82.8975 242.975 78.2738 240.747 74.415C238.374 70.32 232.366 71.1413 227.72 72.0413C223.074 72.9413 216.571 72.0525 216.054 67.35C215.401 61.4325 227.652 55.3575 222.804 51.9038C216.886 47.6738 208.482 49.3275 201.316 48.045C205.141 44.5013 211.835 39.7088 209.619 34.9838C205.602 26.4338 190.032 33.7238 188.671 36.525Z" fill="#FFAA33"/>
      <path className='line' d="M108.391 147.473C91.3364 135.244 69.0951 130.496 48.5301 134.704C58.5089 135.053 62.5251 136.92 70.5464 138.034C78.5789 139.148 88.1301 144.019 94.3626 149.216C100.595 154.414 103.441 164.528 98.2326 170.749C84.9014 171.379 71.3789 166.789 61.1976 158.149C70.6026 153.401 82.8651 155.01 80.5701 163.076C78.7926 167.239 70.6701 164.179 71.2776 159.701C71.8851 155.224 85.7001 157.609 89.8401 159.431C93.9801 161.254 96.4101 165.608 97.8389 169.894C101.011 179.366 100.573 190.234 95.5776 198.896C90.5939 207.559 80.7951 213.555 70.8276 212.948C67.6551 207.671 75.8001 201.743 81.6164 203.768C87.4326 205.793 90.8639 211.598 95.0826 216.086C103.149 224.681 117.695 228.641 126.74 221.104C127.741 220.271 128.675 219.259 128.979 217.999C129.89 214.174 123.421 211.969 121.003 215.074C118.584 218.168 120.463 223.106 123.86 225.075C129.001 228.068 136.584 225.008 138.204 219.281C142.198 205.185 124.715 202.125 124.805 187.478C124.85 180.469 130.059 175.024 136.989 174C143.919 172.976 143.48 171.874 150.118 174.113C160.378 177.578 171.403 181.616 177.286 190.706C164.214 192.608 150.354 187.905 141.118 178.455C145.494 173.235 155.27 174.563 158.105 180.75C155.36 185.959 147.058 186.33 143.064 182.01C139.07 177.679 139.43 170.456 142.94 165.731C146.45 161.006 152.424 158.599 158.296 158.171C174.26 157.013 188.041 168.476 199.888 179.231C185.544 169.421 167.836 164.651 150.511 165.934C147.226 166.181 143.334 166.384 141.298 163.796C139.34 161.321 140.274 157.721 141.433 154.785C147.451 139.609 157.509 126.053 170.3 115.905C175.486 111.788 181.775 108.064 188.323 109.031C200.563 110.831 204.5 126.289 205.659 138.608C207.504 158.228 209.338 178.084 206.334 197.558C204.691 208.211 201.44 218.944 194.589 227.269C187.738 235.594 176.701 241.05 166.115 239.036C155.529 237.023 146.743 226.11 149.094 215.58C151.513 204.724 165.114 198.66 175.509 202.62C185.904 206.58 192.024 218.438 191.124 229.519C190.213 240.6 183.26 250.579 174.26 257.115C165.26 263.651 154.37 267.094 143.458 269.22C127.64 272.314 110.979 272.786 95.6451 267.814C80.3114 262.83 66.4626 251.861 60.5226 236.876C83.3039 232.084 107.694 235.403 128.371 246.079C131.206 247.541 134.165 249.353 135.391 252.3C138.238 259.151 130.239 265.373 123.388 268.219C114.376 271.954 104.375 275.07 94.9926 272.393C85.6101 269.704 78.0614 258.904 82.1789 250.061C85.7789 242.31 96.7139 240.105 104.33 243.986C111.946 247.868 116.458 256.125 118.404 264.45C120.586 273.743 120.024 283.901 115.524 292.328C111.024 300.743 102.249 307.099 92.7089 307.414C87.5901 307.583 81.9652 305.681 79.5014 301.193C77.0377 296.704 79.6589 289.74 84.7664 289.403C87.4551 289.223 89.9976 290.82 91.7526 292.856C96.3314 298.189 96.1402 306.964 91.3477 312.094C89.3902 314.186 86.8026 315.705 85.1714 318.068C79.8501 325.751 87.3089 335.426 91.5726 343.74C95.4651 351.334 96.6689 360.289 94.9139 368.636C94.4189 371.021 93.5751 373.508 91.6514 375.004C87.7926 377.985 81.7176 374.97 79.8389 370.47C77.9489 365.97 75.2939 357.398 79.9851 356.081C97.9064 351.075 94.5201 390.754 89.1089 408.551C83.7089 426.36 72.3014 441.626 61.1076 456.488C57.7214 460.988 52.0851 465.994 47.2814 463.058C45.3239 461.865 44.2776 459.66 43.3889 457.545C24.6914 413.546 27.7964 363.878 26.8064 316.076C25.3214 243.593 13.7114 170.996 21.3051 98.895C22.9476 83.3363 23.3301 65.3475 35.7051 54.9188C38.5289 52.5338 37.0439 62.1863 37.7189 65.82C43.9514 45.3113 65.8326 20.6288 76.2951 16.1625C80.9076 14.1938 76.1714 26.1863 76.1039 31.2038C91.5614 16.1175 127.258 -3.88498 133.141 2.67377C135.898 5.73377 128.754 9.64877 126.56 13.1363C141.759 10.4925 161.39 6.00377 172.618 12.8888C178.366 16.41 161.581 20.8313 158.026 26.5575C165.103 26.0513 172.179 25.5563 179.255 25.05C183.676 24.735 188.57 24.5663 192.001 27.3675C195.433 30.1688 195.185 37.0875 190.831 37.9088C198.245 41.1825 205.659 44.4675 213.084 47.7413C214.771 48.4838 216.751 49.6763 216.639 51.5213C216.56 52.905 215.3 53.8838 214.468 54.9975C211.329 59.25 214.771 65.4488 219.26 68.25C223.749 71.0513 229.25 72.1763 233.199 75.6863C237.148 79.1963 238.183 86.835 233.379 89.0288C239.566 87.9038 245.911 94.0913 244.921 100.301C244.246 104.588 240.86 107.963 239.555 112.114C238.25 116.265 241.186 122.295 245.315 120.945C240.995 126.829 236.563 134.648 240.286 140.925C241.31 142.646 242.874 144.064 243.504 145.954C244.089 147.731 243.74 149.678 243.358 151.511C236.968 181.706 219.586 209.46 195.208 228.394C191.709 223.174 195.365 215.265 201.328 213.285C207.29 211.305 214.085 214.309 218.011 219.225C221.926 224.141 223.423 230.565 223.906 236.831C224.446 243.728 223.704 251.175 219.35 256.541C214.996 261.908 206.075 263.899 201.08 259.106C198.56 256.688 197.503 253.133 196.85 249.69C190.303 215.108 214.456 180.323 208.539 145.628C204.95 124.568 190.213 106.421 171.808 95.565C153.403 84.7088 131.668 80.5575 110.304 80.2875C98.9526 80.1413 87.2301 81.1425 77.1276 86.3063C58.3964 95.8913 49.2389 117.48 44.6264 138.011C40.0139 158.543 38.2701 180.244 28.0439 198.638C25.3326 203.509 20.2251 208.684 15.0614 206.625C13.0026 205.804 11.5401 203.97 10.2689 202.159C3.1589 192.045 -1.07111 178.939 2.78764 167.194C4.83514 160.973 11.5401 154.875 17.3114 157.98C19.1901 158.993 20.4951 160.804 21.6089 162.626C36.2226 186.634 25.8276 217.144 22.5989 245.066C21.9126 250.95 21.6089 257.081 23.6676 262.628C25.8951 268.635 30.6201 273.304 35.2101 277.77C43.3214 285.656 51.4439 293.543 59.5551 301.44C65.8214 307.526 72.3689 313.793 80.6264 316.628C89.3339 319.609 98.9189 318.394 107.851 316.2C142.479 307.684 173.18 284.273 190.561 253.121C181.471 279.818 174.834 307.346 170.761 335.246C168.129 353.28 166.543 371.561 161.683 389.123C156.823 406.684 148.295 423.84 134.221 435.416C131.96 411.465 145.584 389.213 158.668 369.019C165.541 358.41 172.415 347.801 179.289 337.193C184.554 329.07 192.733 319.789 201.969 322.691C206.12 323.996 209.113 327.551 211.7 331.05C222.759 345.99 230.983 363.034 235.775 381C238.509 391.226 239.803 403.185 233.21 411.465C228.575 417.293 220.993 419.936 213.635 421.073C201.384 422.963 188.615 421.41 177.185 416.629C174.755 415.616 172.314 414.401 170.638 412.376C166.228 407.055 168.995 398.854 173.236 393.386C185.926 377.006 207.92 371.561 228.294 367.793C243.875 364.913 260.784 362.573 274.88 369.806C282.868 373.901 289.078 380.685 295.119 387.323C307.156 400.564 319.194 413.805 331.231 427.046" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
    </svg>
  )
}