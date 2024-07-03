import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="19" height="22" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.85 0H12.75C13.2195 0 13.6 0.380562 13.6 0.85V16.15C13.6 16.6195 13.2195 17 12.75 17H0.85C0.380562 17 0 16.6195 0 16.15V0.85C0 0.380562 0.380562 0 0.85 0ZM4.25 7.65V5.1L0 8.5L4.25 11.9V9.35H9.35V7.65H4.25Z" fill="#00707E"/>
</svg>

`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
