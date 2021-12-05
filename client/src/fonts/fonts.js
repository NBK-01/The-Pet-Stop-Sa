import { createGlobalStyle } from 'styled-components';

import ManropeWoff from './Manrope.woff';
import ManropeWoff2 from './Manrope.woff2';
import ManropeBoldWoff from './ManropeB.woff';
import ManropeBoldWoff2 from './ManropeB.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: 'Manrope';
        src: local('Manrope'), local('Manrope'),
        url(${ManropeWoff2}) format('woff2'),
        url(${ManropeWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'ManropeB';
        src: local('Manrope Bold'), local('Manrope Bold'),
        url(${ManropeBoldWoff2}) format('woff2'),
        url(${ManropeBoldWoff}) format('woff');
        font-weight: 800;
        font-style: normal;
    }
`;

