import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="348" height="5" viewBox="0 0 348 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="348" y2="0.5" stroke="#CECECE"/>
</svg>

`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
