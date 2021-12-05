import { createGlobalStyle } from 'styled-components';

import ManropeWoff from './Manrope.woff';
import ManropeWoff2 from './Manrope.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Manrope';
        src: local('Manrope'), local('Manrope'),
        url(${ManropeWoff2}) format('woff2'),
        url(${ManropeWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

import ManropeBoldWoff from './Manrope Bold.woff';
import ManropeBoldWoff2 from './Manrope Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Manrope Bold';
        src: local('Manrope Bold'), local('Manrope Bold'),
        url(${ManropeBoldWoff2}) format('woff2'),
        url(${ManropeBoldWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;