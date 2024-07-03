import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3337 15.6666H0.666992V14H1.50033V8.19279C1.50033 4.03619 4.85819 0.666626 9.00033 0.666626C13.1425 0.666626 16.5003 4.03619 16.5003 8.19279V14H17.3337V15.6666ZM6.91699 16.5H11.0837C11.0837 17.6505 10.1509 18.5833 9.00033 18.5833C7.84974 18.5833 6.91699 17.6505 6.91699 16.5Z" fill="#00707E"/>
</svg>






`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
