import React from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

class Slider extends React.Component {
	componentDidMount() {
		new Glide('.glide', {
			type: 'carousel'
		}).mount();
	}

	render() {
		return (
			<div className="glide">
				<div data-glide-el="track" className="glide__track">
					<ul className="glide__slides">
						<li className="glide__slide">Slide 1</li>
						<li className="glide__slide">Slide 2</li>
						<li className="glide__slide">Slide 3</li>
					</ul>
				</div>
				<div className="glide__arrows" data-glide-el="controls">
					<button className="glide__arrow glide__arrow--left" data-glide-dir="<">
						prev
					</button>
					<button className="glide__arrow glide__arrow--right" data-glide-dir=">">
						next
					</button>
				</div>
			</div>
		);
	}
}

export default Slider;
