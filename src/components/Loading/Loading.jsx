import React from 'react';
import { string } from 'prop-types';

import './style.scss';

const LoadingIcon = (props) => {
  const { width, height } = props;
  return (
    <div className="loading--wrapper">
      <div className="icon--wrapper">
<svg xmlns="http://www.w3.org/2000/svg" className="spinner-icon" width={width} height={height} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<title>Loading</title>
<g transform="translate(90,50)">
<g transform="rotate(0)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="1" transform="scale(1.12966 1.12966)">
  <animateTransform attributeName="transform" type="scale" begin="-0.9s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.9s"></animate>
</circle>
</g>
</g><g transform="translate(82.36067977499789,73.51141009169893)">
<g transform="rotate(36)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.9" transform="scale(1.18466 1.18466)">
  <animateTransform attributeName="transform" type="scale" begin="-0.8s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.8s"></animate>
</circle>
</g>
</g><g transform="translate(62.3606797749979,88.04226065180615)">
<g transform="rotate(72)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.8" transform="scale(1.23966 1.23966)">
  <animateTransform attributeName="transform" type="scale" begin="-0.7s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.7s"></animate>
</circle>
</g>
</g><g transform="translate(37.63932022500211,88.04226065180615)">
<g transform="rotate(108)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.7" transform="scale(1.29466 1.29466)">
  <animateTransform attributeName="transform" type="scale" begin="-0.6s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.6s"></animate>
</circle>
</g>
</g><g transform="translate(17.63932022500211,73.51141009169893)">
<g transform="rotate(144)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.6" transform="scale(1.34966 1.34966)">
  <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
</circle>
</g>
</g><g transform="translate(10,50.00000000000001)">
<g transform="rotate(180)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.5" transform="scale(1.40466 1.40466)">
  <animateTransform attributeName="transform" type="scale" begin="-0.4s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.4s"></animate>
</circle>
</g>
</g><g transform="translate(17.639320225002102,26.48858990830108)">
<g transform="rotate(216)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.4" transform="scale(1.45966 1.45966)">
  <animateTransform attributeName="transform" type="scale" begin="-0.3s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.3s"></animate>
</circle>
</g>
</g><g transform="translate(37.639320225002095,11.957739348193861)">
<g transform="rotate(252)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.3" transform="scale(1.51466 1.51466)">
  <animateTransform attributeName="transform" type="scale" begin="-0.2s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.2s"></animate>
</circle>
</g>
</g><g transform="translate(62.36067977499789,11.957739348193854)">
<g transform="rotate(288)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.2" transform="scale(1.01966 1.01966)">
  <animateTransform attributeName="transform" type="scale" begin="-0.1s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.1s"></animate>
</circle>
</g>
</g><g transform="translate(82.36067977499789,26.488589908301066)">
<g transform="rotate(324)">
<circle cx="0" cy="0" r="6" fill="#1d0e0b" fillOpacity="0.1" transform="scale(1.07466 1.07466)">
  <animateTransform attributeName="transform" type="scale" begin="0s" values="1.55 1.55;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
  <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
</circle>
</g>
</g>
</svg>
</div>
</div>
);
};


LoadingIcon.defaultProps = {
  width: '32px',
  height: '32px',
};

LoadingIcon.propTypes = {
  width: string,
  height: string,
};

export default LoadingIcon;
