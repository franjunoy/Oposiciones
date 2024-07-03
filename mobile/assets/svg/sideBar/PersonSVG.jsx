import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="27" height="32" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.175781 21.7252C0.175781 17.3286 3.73995 13.7644 8.13657 13.7644C12.5332 13.7644 16.0974 17.3286 16.0974 21.7252H0.175781ZM8.13657 12.7693C4.83782 12.7693 2.16598 10.0975 2.16598 6.79872C2.16598 3.49996 4.83782 0.828125 8.13657 0.828125C11.4353 0.828125 14.1072 3.49996 14.1072 6.79872C14.1072 10.0975 11.4353 12.7693 8.13657 12.7693Z" fill="#D9EFF2"/>
</svg>

`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
