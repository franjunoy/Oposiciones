import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2702_726)">
<path d="M18.1079 8.57235H13.7131V6.43005C13.7131 6.43005 13.467 4.39279 14.8914 4.39279C16.5012 4.39279 17.7866 4.39279 17.7866 4.39279V1.23336e-06H12.8572C12.8572 1.23336e-06 8.73226 -0.0175225 8.73226 4.12498C8.73226 5.01485 8.72815 6.63498 8.72194 8.57235H5.8916V12.1092H8.71468C8.69821 17.7328 8.67863 24.0001 8.67863 24.0001H13.7131V12.1092H17.0357L18.1079 8.57235Z" fill="#4267B2"/>
</g>
<defs>
<clipPath id="clip0_2702_726">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>




`;

export default FacebookSVG = () => {
    return (<SvgXml xml={xml} className="hover:cursor-pointer"  />) 
    }

