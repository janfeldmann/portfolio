import { css } from 'styled-components';
import { baseEM, ffRegular } from './variables';

const mixins = {};

/**
 * Calculate PX font size to REM
 *
 * @param {number} size - element size in pixel
 *
 */
export const fontSizeREM = size => css`
	font-size: ${size / baseEM}rem;
`;

/**
 * Webfont mixin for global use
 *
 * @param {string} fontFamily - set the font-family value
 * @param {string} fontWeight - set the font-weight value
 * @param {string} fontStyle - set the font-style value
 */
export const font = (fontFamily, fontWeight, fontStyle) => css`
	font-family: ${fontFamily || ffRegular};
	font-weight: ${fontWeight || 'normal'};
	font-style: ${fontStyle || 'normal'};
	speak: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

mixins.fontSizeREM = fontSizeREM;
mixins.font = font;

export default mixins;
