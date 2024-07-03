import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="95" height="107" viewBox="0 0 95 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="95" height="107" rx="5.75758" fill="#00707E" fill-opacity="0.35"/>
</svg>
`;

export default CardSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
