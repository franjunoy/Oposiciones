import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="31" height="31" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.82602 0.828125H12.8064C17.2031 0.828125 20.7672 4.39229 20.7672 8.78891C20.7672 13.1856 17.2031 16.7497 12.8064 16.7497V20.2325C7.83093 18.2423 0.865234 15.2571 0.865234 8.78891C0.865234 4.39229 4.4294 0.828125 8.82602 0.828125Z" fill="#D9EFF2"/>
</svg>

`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
