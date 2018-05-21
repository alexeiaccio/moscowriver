import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

import PodkovaRegularEot from './fonts/subset-Podkova-Regular.eot'
import PodkovaRegularEotIe from './fonts/subset-Podkova-Regular.eot?#iefix'
import PodkovaRegularWoff from './fonts/subset-Podkova-Regular.woff'
import PodkovaRegularWoff2 from './fonts/subset-Podkova-Regular.woff2'
import PodkovaRegularTtf from './fonts/subset-Podkova-Regular.ttf'
import PodkovaRegularSvg from './fonts/subset-Podkova-Regular.svg'

import PodkovaMediumEot from './fonts/subset-Podkova-Medium.eot'
import PodkovaMediumEotIe from './fonts/subset-Podkova-Medium.eot?#iefix'
import PodkovaMediumWoff from './fonts/subset-Podkova-Medium.woff'
import PodkovaMediumWoff2 from './fonts/subset-Podkova-Medium.woff2'
import PodkovaMediumTtf from './fonts/subset-Podkova-Medium.ttf'
import PodkovaMediumSvg from './fonts/subset-Podkova-Medium.svg'

import MontserratRegularEot from './fonts/subset-Montserrat-Regular.eot'
import MontserratRegularEotIe from './fonts/subset-Montserrat-Regular.eot?#iefix'
import MontserratRegularWoff from './fonts/subset-Montserrat-Regular.woff'
import MontserratRegularWoff2 from './fonts/subset-Montserrat-Regular.woff2'
import MontserratRegularTtf from './fonts/subset-Montserrat-Regular.ttf'
import MontserratRegularSvg from './fonts/subset-Montserrat-Regular.svg'

import MontserratMediumEot from './fonts/subset-Montserrat-Medium.eot'
import MontserratMediumEotIe from './fonts/subset-Montserrat-Medium.eot?#iefix'
import MontserratMediumWoff from './fonts/subset-Montserrat-Medium.woff'
import MontserratMediumWoff2 from './fonts/subset-Montserrat-Medium.woff2'
import MontserratMediumTtf from './fonts/subset-Montserrat-Medium.ttf'
import MontserratMediumSvg from './fonts/subset-Montserrat-Medium.svg'

import MontserratSemiBoldEot from './fonts/subset-Montserrat-SemiBold.eot'
import MontserratSemiBoldEotIe from './fonts/subset-Montserrat-SemiBold.eot?#iefix'
import MontserratSemiBoldWoff from './fonts/subset-Montserrat-SemiBold.woff'
import MontserratSemiBoldWoff2 from './fonts/subset-Montserrat-SemiBold.woff2'
import MontserratSemiBoldTtf from './fonts/subset-Montserrat-SemiBold.ttf'
import MontserratSemiBoldSvg from './fonts/subset-Montserrat-SemiBold.svg'

const baseStyles = () => injectGlobal`
  ${reset}

  @font-face {
      font-family: 'Podkova';
      src: url(${PodkovaRegularEot});
      src: url(${PodkovaRegularEotIe}) format('embedded-opentype'),
           url(${PodkovaRegularWoff2}) format('woff2'),
           url(${PodkovaRegularWoff}) format('woff'),
           url(${PodkovaRegularTtf}) format('truetype'),
           url(${PodkovaRegularSvg}#Podkova-Regular) format('svg');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'Podkova';
      src: url(${PodkovaMediumEot});
      src: url(${PodkovaMediumEotIe}) format('embedded-opentype'),
           url(${PodkovaMediumWoff2}) format('woff2'),
           url(${PodkovaMediumWoff}) format('woff'),
           url(${PodkovaMediumTtf}) format('truetype'),
           url(${PodkovaMediumSvg}#Podkova-Medium) format('svg');
      font-weight: 500;
      font-style: normal;
  }


  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegularEot});
      src: url(${MontserratRegularEotIe}) format('embedded-opentype'),
           url(${MontserratRegularWoff2}) format('woff2'),
           url(${MontserratRegularWoff}) format('woff'),
           url(${MontserratRegularTtf}) format('truetype'),
           url(${MontserratRegularSvg}#Montserrat-Regular) format('svg');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratMediumEot});
      src: url(${MontserratMediumEotIe}) format('embedded-opentype'),
           url(${MontserratMediumWoff2}) format('woff2'),
           url(${MontserratMediumWoff}) format('woff'),
           url(${MontserratMediumTtf}) format('truetype'),
           url(${MontserratMediumSvg}#Montserrat-Medium) format('svg');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Montserrat';
      src: url(${MontserratSemiBoldEot});
      src: url(${MontserratSemiBoldEotIe}) format('embedded-opentype'),
           url(${MontserratSemiBoldWoff2}) format('woff2'),
           url(${MontserratSemiBoldWoff}) format('woff'),
           url(${MontserratSemiBoldTtf}) format('truetype'),
           url(${MontserratSemiBoldSvg}#Montserrat-SemiBold) format('svg');
      font-weight: 600;
      font-style: normal;
  }

  body {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 10px;
    color: #261A12;
  }

  h1,h2,h3,h4,h5,h6,cite {
    font-family: 'Podkova'
  }
`

export default baseStyles