const variables = {};

export const sizes = {
	retina: 1920,
	desktop: 1240,
	notebook: 992,
	tablet: 768,
	phone: 376,
};

export const baseEM = 16;
export const bodyFontSizePX = 16;

/* Font Style */
export const ffRegular = '"Montserrat", sans-serif';
export const ffHeading = '"Fira Sans", sans-serif';
export const ffIcon = 'iconfont';

export const containerMaxWidths = sizes.retina;
export const containerMinWidths = sizes.phone;

export const gridGutterWidth = 20;

variables.sizes = sizes;
variables.baseEM = baseEM;

export default variables;
