import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="29" height="30" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.82 18.4744C18.82 19.024 18.3745 19.4695 17.8249 19.4695H1.9033C1.35373 19.4695 0.908203 19.024 0.908203 18.4744V8.01495C0.908203 7.70787 1.04997 7.41799 1.29237 7.22947L9.2532 1.03774C9.61253 0.758254 10.1157 0.758254 10.475 1.03774L18.4358 7.22947C18.6782 7.41799 18.82 7.70787 18.82 8.01495V18.4744Z" fill="#D9EFF2"/>
</svg>


`;

export default AppleSVG = () => {
  return <SvgXml xml={xml} className='hover:cursor-pointer' />;
};
