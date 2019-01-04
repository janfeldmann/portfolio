import React from 'react';
import styled from 'styled-components';
import { slideFadeIn, zoomOut } from '../../styles/animations';
import { ffHeading } from '../../styles/variables';
import { font, fontSizeREM } from '../../styles/mixins';

const StageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
`;

const StageMedia = styled.div`
	position: relative;
	margin-top: auto;

	picture {
		overflow: hidden;
	}

	img,
	picture {
		width: 100%;
		height: 100%;
	}

	img {
		max-width: 100%;
		object-fit: cover;
		opacity: 0;
		animation-name: ${zoomOut};
		animation-duration: 1000ms;
		animation-fill-mode: forwards;
	}
`;

const StageContent = styled.div`
	transform: translateZ(0);
	padding: 45px 0 0;
	align-self: center;

	h1,
	h2 {
		opacity: 0;
		animation-name: ${slideFadeIn};
		animation-duration: 600ms;
		animation-delay: 800ms;
		animation-fill-mode: forwards;
	}

	h1 {
		${font(ffHeading)};
		margin-bottom: 5px;
		text-transform: uppercase;
		letter-spacing: 1px;
		word-spacing: 2px;
	}

	h2 {
		${font(ffHeading)};
		${fontSizeREM(14)};
		animation-delay: 1000ms;
		text-transform: none;
		margin: 0;
	}
`;

class Stage extends React.Component {
	render() {
		return (
			<div className={this.props.className}>
				<StageWrapper>
					<StageContent>
						<h1>
							I develop experiences
							<br />
							that make peoples
							<br />
							lives easier
						</h1>
						<h2>Jan Feldmann // Frontend Developer</h2>
					</StageContent>
					<StageMedia data-parallax-speed="4">
						<picture>
							<img src="assets/img/slider_bg_1920.webp" alt="Jan Feldmann" />
						</picture>
					</StageMedia>
				</StageWrapper>
			</div>
		);
	}
}

export const StyledStage = styled(Stage)``;

export default StyledStage;
