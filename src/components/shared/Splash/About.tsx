import React from 'react';
import { getIdealDims } from '../../../utils/page';
import { HeadingProps } from './index';

export function AboutHeading(props: HeadingProps): JSX.Element {
  const multiplier = 0.19;
  const [width, height] = getIdealDims(props.width, props.height, multiplier);

  return (
    <svg width={width} height={height} viewBox="0 0 370 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className='lines'>
        <path className='words' stroke-alignment='inner' stroke='#191919' strokeWidth='1' d="M61.7999 59.7001C62.3999 61.2334 62.9333 62.3334 63.4 63.0001C63.9333 63.6668 64.6333 64.1334 65.5 64.4001C66.3667 64.6001 67.7333 64.7001 69.6 64.7001V68.0001H39.5999V64.7001H44.2999C46.0999 64.7001 47 63.9334 47 62.4001C47 61.8001 46.9 61.1668 46.7 60.5001L41 44.6001H20.4L14.7 60.8001C14.5 61.4668 14.4 62.0668 14.4 62.6001C14.4 63.3334 14.6 63.8668 15 64.2001C15.4667 64.5334 16.2332 64.7001 17.2999 64.7001H21.5V68.0001H0.699951V64.7001C3.43328 64.7001 5.36662 64.3668 6.49995 63.7001C7.63328 62.9668 8.63328 61.4668 9.49995 59.2001L31.5 2.00005H41L61.7999 59.7001ZM39.7 40.9001L30.7999 16.2001H30.5L21.7 40.9001H39.7ZM74.5984 64.7001C76.7984 64.7001 78.3984 64.5668 79.3984 64.3001C80.3984 63.9668 81.0651 63.4334 81.3984 62.7001C81.7318 61.9001 81.8984 60.7001 81.8984 59.1001V11.1001C81.8984 9.30005 81.7318 8.03338 81.3984 7.30004C81.0651 6.50005 80.3984 5.96671 79.3984 5.70005C78.4651 5.43338 76.8651 5.30005 74.5984 5.30005V2.00005H105.698C121.898 2.00005 129.998 7.06671 129.998 17.2001C129.998 21.2001 128.732 24.4668 126.198 27.0001C123.732 29.5334 120.098 31.3001 115.298 32.3001V32.4001C126.965 34.4001 132.798 40.3668 132.798 50.3001C132.798 62.1001 124.132 68.0001 106.798 68.0001H74.5984V64.7001ZM102.098 30.9001C106.365 30.9001 109.598 29.8001 111.798 27.6001C114.065 25.4001 115.198 22.2334 115.198 18.1001C115.198 9.90005 110.865 5.80005 102.198 5.80005C99.9984 5.80005 98.5984 6.06671 97.9984 6.60005C97.3984 7.06671 97.0984 8.13338 97.0984 9.80005V30.9001H102.098ZM104.098 64.2001C112.632 64.2001 116.898 59.6001 116.898 50.4001C116.898 45.4668 115.632 41.6334 113.098 38.9001C110.565 36.1668 106.965 34.8001 102.298 34.8001H97.0984V57.7001C97.0984 60.1668 97.5984 61.8668 98.5984 62.8001C99.5984 63.7334 101.432 64.2001 104.098 64.2001ZM172.838 69.1001C162.038 69.1001 153.838 66.1001 148.238 60.1001C142.638 54.1001 139.838 45.7001 139.838 34.9001C139.838 24.1001 142.638 15.7334 148.238 9.80005C153.838 3.80005 162.038 0.800049 172.838 0.800049C183.638 0.800049 191.838 3.80005 197.438 9.80005C203.104 15.7334 205.938 24.1001 205.938 34.9001C205.938 45.7001 203.104 54.1001 197.438 60.1001C191.838 66.1001 183.638 69.1001 172.838 69.1001ZM172.938 65.5001C178.804 65.5001 183.038 62.9668 185.638 57.9001C188.304 52.8334 189.638 45.1668 189.638 34.9001C189.638 14.5668 184.071 4.40005 172.938 4.40005C167.071 4.40005 162.804 6.93338 160.138 12.0001C157.538 17.0001 156.238 24.6334 156.238 34.9001C156.238 45.1668 157.538 52.8334 160.138 57.9001C162.804 62.9668 167.071 65.5001 172.938 65.5001ZM246.11 69.2001C236.377 69.2001 229.31 67.3334 224.91 63.6001C220.577 59.8001 218.41 53.8001 218.41 45.6001V11.0001C218.41 9.20005 218.277 7.93338 218.01 7.20005C217.743 6.46671 217.11 5.96671 216.11 5.70005C215.177 5.43338 213.543 5.30005 211.21 5.30005V2.00005H240.91V5.30005C238.577 5.30005 236.91 5.43338 235.91 5.70005C234.977 5.96671 234.343 6.46671 234.01 7.20005C233.743 7.93338 233.61 9.20005 233.61 11.0001V46.1001C233.61 52.5001 234.61 57.2334 236.61 60.3001C238.61 63.3668 241.843 64.9001 246.31 64.9001C250.843 64.9001 254.11 63.3668 256.11 60.3001C258.177 57.2334 259.21 52.5001 259.21 46.1001V11.0001C259.21 9.20005 259.043 7.93338 258.71 7.20005C258.443 6.46671 257.81 5.96671 256.81 5.70005C255.877 5.43338 254.243 5.30005 251.91 5.30005V2.00005H281.41V5.30005C279.077 5.30005 277.41 5.43338 276.41 5.70005C275.477 5.96671 274.877 6.46671 274.61 7.20005C274.343 7.93338 274.21 9.20005 274.21 11.0001V45.6001C274.21 53.8001 271.977 59.8001 267.51 63.6001C263.043 67.3334 255.91 69.2001 246.11 69.2001ZM300.175 64.7001C302.708 64.7001 304.475 64.6001 305.475 64.4001C306.542 64.1334 307.208 63.6668 307.475 63.0001C307.808 62.2668 307.975 61.0001 307.975 59.2001V5.50005H303.275C299.342 5.50005 296.308 6.60005 294.175 8.80005C292.042 11.0001 290.608 14.5668 289.875 19.5001H286.375L286.475 2.00005H344.675V19.5001H341.275C340.275 14.2334 338.708 10.6001 336.575 8.60005C334.508 6.53338 331.442 5.50005 327.375 5.50005H323.175V59.2001C323.175 60.9334 323.342 62.1668 323.675 62.9001C324.008 63.6334 324.675 64.1334 325.675 64.4001C326.742 64.6001 328.508 64.7001 330.975 64.7001V68.0001H300.175V64.7001Z" fill="none"/>
        <path className='dot' stroke-alignment='inner' stroke='#FEC600' strokeWidth='1' d="M361.48 68.9001C359.413 68.9001 357.613 68.1668 356.08 66.7001C354.613 65.1668 353.88 63.3668 353.88 61.3001C353.88 59.2334 354.613 57.4334 356.08 55.9001C357.613 54.3668 359.413 53.6001 361.48 53.6001C363.613 53.6001 365.413 54.3668 366.88 55.9001C368.413 57.3668 369.18 59.1668 369.18 61.3001C369.18 63.4334 368.413 65.2334 366.88 66.7001C365.413 68.1668 363.613 68.9001 361.48 68.9001Z" fill="none"/>
      </g>
    </svg>
  );
}

export function AboutSplash(props: HeadingProps): JSX.Element {
  const multiplier = 0.97;
  const [width, height] = getIdealDims(props.width, props.height, multiplier);

  return (
    <svg width={width} height={height} viewBox="0 0 351 342" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className='colors'>
        <path d="M345.839 121.699C349.124 109.65 348.741 96.6337 344.748 84.7987C344.095 82.875 343.24 80.8387 341.485 79.815C338.178 77.8912 334.172 80.6137 331.337 83.1787C282.062 127.751 232.788 172.324 183.513 216.907C175.593 224.074 166.626 231.667 155.95 231.724C148.694 231.769 141.932 228.247 135.587 224.715C97.5512 203.509 61.7875 178.241 29.095 149.475C23.2675 144.345 17.1475 138.9 9.54249 137.325C8.09124 147.517 8.01249 157.912 9.30624 168.127C9.71124 171.3 10.2625 174.517 11.725 177.364C13.6825 181.166 17.08 183.99 20.41 186.69C53.5075 213.499 88.045 238.53 123.82 261.649C130.548 265.991 138.006 270.446 145.971 269.625C151.428 269.062 156.288 266.081 160.855 263.044C226.004 219.832 274.548 151.871 345.839 121.699Z" fill="#63D0F7"/>
        <path d="M99.3737 161.085C106.967 163.031 114.426 167.666 122.065 165.934C125.541 165.146 128.635 163.054 131.11 160.477C138.805 152.501 140.661 139.867 136.847 129.461C133.022 119.055 124.135 110.955 113.886 106.736C109.24 104.824 104.121 103.631 99.1712 104.486C93.2312 105.521 88.18 109.38 83.9387 113.655C80.6537 116.962 77.65 120.664 75.8837 124.984C72.6775 132.78 73.9375 142.05 78.415 149.194C82.8925 156.337 90.295 161.4 98.3612 163.819C103.232 165.281 108.509 165.832 113.2 163.864C113.065 163.729 112.941 163.605 112.806 163.47C112.784 163.605 112.784 163.74 99.3737 161.085Z" fill="#F7EB63"/>
        <path d="M187.653 83.1787C174.355 91.155 160.934 99.2437 149.875 110.111C148.548 111.416 147.152 113.317 148.03 114.971C148.424 115.702 149.177 116.152 149.897 116.569C154.341 119.122 158.785 121.676 163.229 124.23C164.871 125.175 166.739 126.154 168.573 125.659C170.35 125.186 171.475 123.499 172.544 122.002C179.091 112.879 189.261 107.107 197.125 99.0975C198.149 98.0512 199.161 96.9375 199.713 95.5762C201.029 92.37 199.443 88.5562 196.855 86.2612C194.279 83.9325 190.443 81.5025 187.653 83.1787Z" fill="#63D0F7"/>
        <path d="M226.622 77.5087C231.775 78.5549 236.804 80.6924 242.057 80.4674C249.347 80.1524 256.03 74.8762 258.55 68.0362C261.081 61.1962 259.619 53.1524 255.288 47.2799C250.956 41.4074 244.015 37.6837 236.77 36.7274C232.742 36.1987 228.602 36.4799 224.687 37.5487C218.286 39.2924 212.38 43.3087 209.05 49.0574C205.72 54.8062 205.292 62.3099 208.589 68.0699C211.266 72.7387 215.991 75.8662 220.817 78.2512C225.07 80.3549 229.941 82.0649 234.486 80.6812C235.847 80.2649 238.064 80.2537 226.622 77.5087Z" fill="#F7ED63"/>
      </g>
      <path className='line' d="M136.949 341.152C120.625 317.359 126.801 283.642 143.631 260.209C160.473 236.775 185.819 221.205 210.254 205.849C247.694 182.325 284.549 157.879 320.785 132.544C335.635 122.16 352.116 107.94 349.889 89.9625C349.371 85.8 347.2 81.2212 343.094 80.3325C338.987 79.4437 334.847 85.44 338.2 87.96C341.08 90.1312 345.411 86.6437 345.366 83.0325C345.321 79.4325 342.666 76.4625 340.112 73.9087C308.387 42.2287 267.809 19.5037 224.215 9.01871C224.046 15.8362 231.044 20.2912 237.029 23.5762C256.154 34.0387 273.974 46.8637 289.971 61.6687C291.321 62.9175 292.727 64.29 293.132 66.0787C293.92 69.5325 290.826 72.5362 287.991 74.6625C270.171 87.9937 250.506 98.6362 231.887 110.831C195.899 134.4 163.949 163.695 128.027 187.354C120.344 192.416 111.715 197.4 102.569 196.41C94.9975 195.589 88.5287 190.819 82.4762 186.217C70.54 177.15 58.6037 168.082 46.6675 159.015C43.81 156.844 40.7838 154.425 39.8163 150.971C37.9713 144.39 44.305 138.619 49.9075 134.715C101.68 98.76 154.623 64.515 208.634 32.0362C211.334 30.4162 214.157 28.7512 217.296 28.4812C220.615 28.1887 223.844 29.4937 226.881 30.855C239.537 36.5137 251.53 43.6575 262.532 52.095C267.527 55.92 272.601 60.465 273.974 66.5962C276.347 77.1375 266.582 86.8237 256.367 90.3225C245.117 94.1812 232.337 93.36 221.672 88.095C216.396 85.485 211.379 81.4912 209.59 75.8887C207.374 68.9699 211.041 60.8812 217.375 57.315C223.709 53.7487 232.011 54.525 238.052 58.5525C244.195 62.6475 247.874 72.0075 242.845 77.4075C241.247 79.1287 239.031 80.1525 236.837 80.9962C230.92 83.3025 223.585 84.5062 218.725 80.4112C213.437 75.9562 215.046 65.7637 221.605 63.57C228.164 61.3762 235.667 69.2737 232.776 75.5512C230.02 81.5362 221.672 82.29 215.35 80.4112C209.039 78.5325 202.986 74.9212 196.416 75.2925C190.521 75.63 185.335 79.1287 180.497 82.5149C172.251 88.2749 164.005 94.0237 155.759 99.7837C150.876 103.192 145.499 107.456 145.24 113.407C144.902 121.395 154.555 126.581 162.452 125.355C170.35 124.129 176.909 118.864 183.805 114.847C189.801 111.349 196.709 108.311 199.926 102.157C203.144 96.0037 198.914 86.0699 192.096 87.4199C190.352 87.7687 188.834 88.77 187.36 89.76C168.64 102.315 149.909 114.87 131.189 127.425C125.575 131.194 119.354 136.009 119.23 142.77C122.38 145.852 128.511 142.624 128.646 138.225C128.781 133.815 124.315 130.249 119.905 130.192C110.387 130.069 105.516 144.424 112.244 151.162C118.96 157.901 131.796 155.066 136.6 146.842C140.358 140.407 139.638 131.655 134.879 125.917C130.12 120.18 121.649 117.862 114.64 120.371C110.635 121.8 107.237 124.601 104.481 127.841C99.9587 133.174 97 140.059 97.315 147.045C97.9337 160.624 112.232 171.514 125.687 169.522C139.142 167.531 149.492 154.099 149.121 140.509C148.75 126.919 138.546 114.51 125.609 110.336C108.97 104.97 90.7225 112.226 76.6825 122.632C65.1063 131.216 54.43 144.131 56.3313 158.419C57.9288 170.411 67.8062 179.344 77.0425 187.162C92.995 200.662 108.947 214.162 124.9 227.662C129.501 231.555 134.417 236.01 135.182 241.995C130.671 243.075 126.273 240.127 122.571 237.326C93.13 215.006 64.6112 191.482 37.105 166.822C27.8462 158.52 18.43 149.914 6.91 145.222C5.57125 150.69 9.55376 155.921 13.4238 160.005C26.4963 173.865 41.2 186.06 55.8587 198.221C77.0537 215.805 98.26 233.389 119.455 250.972C126.07 256.462 135.565 262.121 142.484 257.025C148.525 252.57 147.479 243.536 148.334 236.089C150.28 219.079 164.534 206.479 177.944 195.836C222.212 160.669 268.27 127.526 317.635 99.9637C322.754 97.1062 328.052 94.26 333.869 93.5175C337.739 105.881 341.316 120.405 333.767 130.935C330.977 134.827 326.95 137.64 323.024 140.385C274.154 174.54 227.095 211.282 182.095 250.399C173.68 257.711 164.759 265.395 153.79 267.386C140.459 269.794 127.262 263.269 115.585 256.384C76.12 233.141 40.4013 203.554 10.2063 169.106C7.56251 166.091 4.93001 162.975 3.33251 159.307C0.0925128 151.815 1.71251 142.894 5.86376 135.862C10.015 128.842 16.405 123.431 23.02 118.65C40.48 106.027 60.145 96.87 79.4613 87.3412C131.2 61.8262 181.33 33.06 229.469 1.26746" stroke="black" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>

  );
}