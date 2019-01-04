import { createGlobalStyle } from 'styled-components';

const TypoStyle = createGlobalStyle`
@font-face {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src: url('../assets/fonts/webfonts/montserrat/montserrat-v12-latin-regular.eot'); /* IE9 Compat Modes */
	src: local('Montserrat Regular'), local('Montserrat-Regular'),
		url('../assets/fonts/webfonts/montserrat/montserrat-v12-latin-regular.eot?#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */ url('../assets/fonts/webfonts/montserrat/montserrat-v12-latin-regular.woff2')
			format('woff2'),
		/* Super Modern Browsers */
			url('../assets/fonts/webfonts/montserrat/montserrat-v12-latin-regular.woff')
			format('woff'),
		/* Modern Browsers */
			url('../assets/fonts/webfonts/montserrat/montserrat-v12-latin-regular.ttf')
			format('truetype'),
		/* Safari, Android, iOS */
			url('../assets/fonts/webfonts/montserrat/montserrat-v12-latin-regular.svg#Montserrat')
			format('svg'); /* Legacy iOS */
}

/* fira-sans-300 - latin */
@font-face {
	font-family: 'Fira Sans';
	font-style: normal;
	font-weight: 300;
	font-display: swap;
	src: url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-300.eot'); /* IE9 Compat Modes */
	src: local('Fira Sans Light'), local('FiraSans-Light'),
		url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-300.eot?#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */ url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-300.woff2')
			format('woff2'),
		/* Super Modern Browsers */
			url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-300.woff') format('woff'),
		/* Modern Browsers */ url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-300.ttf')
			format('truetype'),
		/* Safari, Android, iOS */
			url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-300.svg#FiraSans')
			format('svg'); /* Legacy iOS */
}
/* fira-sans-700 - latin */
@font-face {
	font-family: 'Fira Sans';
	font-style: normal;
	font-weight: 700;
	font-display: swap;
	src: url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-700.eot'); /* IE9 Compat Modes */
	src: local('Fira Sans Bold'), local('FiraSans-Bold'),
		url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-700.eot?#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */ url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-700.woff2')
			format('woff2'),
		/* Super Modern Browsers */
			url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-700.woff') format('woff'),
		/* Modern Browsers */ url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-700.ttf')
			format('truetype'),
		/* Safari, Android, iOS */
			url('../assets/fonts/webfonts/fira-sans/fira-sans-v8-latin-700.svg#FiraSans')
			format('svg'); /* Legacy iOS */
}

h1,
.util-h1,
h2,
.util-h2,
h3,
.util-h3,
h4,
.util-h4,
h5,
.util-h5,
h6,
.util-h6 {
	margin-top: 0;
}

h1,
.util-h1 {
	line-height: 1.17;
}

h2,
.util-h2 {
	letter-spacing: 1px;
	text-transform: uppercase;
}

h3,
.util-h3 {
	line-height: 1.17;
	letter-spacing: 0.7px;
}

h4,
.util-h4 {
	line-height: 1.19;
	letter-spacing: 0.6px;
}

h5,
.util-h5 {
	line-height: 1.14;
	letter-spacing: 0.6px;
}

h6,
.util-h6 {
	line-height: 1.25;
	letter-spacing: 0.3px;
}

p,
.util-paragraph {
	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
}

p,
.util-paragraph,
p a,
.util-link {
	line-height: 1.5;
	letter-spacing: 0.6px;
}

small,
.util-small {
	display: inline-block;
	line-height: 1.5;
	letter-spacing: 0.2px;
}

a {
	transition: all 150ms ease;
	color: color('ci');

	&:visited {
		color: color('ci');
	}
}
`;

export default TypoStyle;
