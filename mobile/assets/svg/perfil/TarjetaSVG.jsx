import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="21" height="19" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2222 5.32777V12.9389C15.2222 13.3592 14.8815 13.7 14.4611 13.7H0.76111C0.340764 13.7 0 13.3592 0 12.9389V5.32777H15.2222ZM15.2222 3.80555H0V0.76111C0 0.340757 0.340764 0 0.76111 0H14.4611C14.8815 0 15.2222 0.340757 15.2222 0.76111V3.80555ZM9.89445 9.89444V11.4167H12.9389V9.89444H9.89445Z" fill="#00707E"/>
</svg>


`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
