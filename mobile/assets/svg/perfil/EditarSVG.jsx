import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="20" height="22" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.73376 13.2474H0.375V9.88858L9.42771 0.835875C9.73693 0.526713 10.2381 0.526713 10.5473 0.835875L12.7865 3.07505C13.0957 3.38421 13.0957 3.88547 12.7865 4.19463L3.73376 13.2474ZM0.375 14.8307H14.625V16.4141H0.375V14.8307Z" fill="#00707E"/>
</svg>


`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
