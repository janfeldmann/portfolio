import { createGlobalStyle } from 'styled-components';
import {
	bodyFontSizePX,
	containerMaxWidths,
	containerMinWidths,
	gridGutterWidth,
} from './variables';

const LayoutStyle = createGlobalStyle`
  * {
    box-sizing: border-box; 
  }
  body {
    margin: 0;
  }
  .container {
    min-width: (${containerMinWidths} / ${bodyFontSizePX})em;
    max-width: (${containerMaxWidths} / ${bodyFontSizePX})em;
    margin: 0 auto;
    padding: 0 ${gridGutterWidth}px;
  }
  picture,
  img {
    display: block;
  }

  img {
    height: auto;
    outline: 0;
    max-width: 100%;
  }
  
  .fade-appear {
    opacity: 0.01;
  }
  
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 4500ms ease-in;
  }
  
  .fade-leave {
    opacity: 1;
  }
  
  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 1300ms ease-in;
  }
`;

export default LayoutStyle;
