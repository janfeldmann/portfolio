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
`;

export default LayoutStyle;
