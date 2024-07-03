import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.291029 5.23068C-0.0968029 5.1014 -0.0998681 4.89282 0.299007 4.75986L14.4649 0.0379029C14.8571 -0.0928438 15.0821 0.126708 14.9721 0.511377L10.9248 14.6773C10.8127 15.0695 10.5866 15.0831 10.4209 14.7102L7.75303 8.70758L12.2063 2.76999L6.26863 7.22318L0.291029 5.23068Z" fill="#00707E"/>
</svg>

`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
