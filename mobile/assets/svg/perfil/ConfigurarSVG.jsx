import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6 10.4V0.8C1.6 0.358176 1.95818 0 2.4 0H15.2C15.6418 0 16 0.358176 16 0.8V13.6C16 14.9255 14.9255 16 13.6 16H2.4C1.07452 16 0 14.9255 0 13.6V12H12.8V13.6C12.8 14.0418 13.1582 14.4 13.6 14.4C14.0418 14.4 14.4 14.0418 14.4 13.6V10.4H1.6Z" fill="#00707E"/>
</svg>

`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
