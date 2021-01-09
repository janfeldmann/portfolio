import { keyframes } from 'styled-components';

const animations = {};

export const slideFadeIn = keyframes`
	0% {
		transform: translateY(20px);
		opacity: 0;
	}
	100% {
		transform: none;
		opacity: 1;
    }
`;

export const zoomOut = keyframes`
    0% {
        opacity: 0;
        transform: scale3d(1.1, 1.1, 1);
    }
    100% {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
`;

export default animations;
