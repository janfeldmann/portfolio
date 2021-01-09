import { h, render, Component } from 'preact'; // import { ... } from 'preact';
import { createApolloFetch } from 'apollo-fetch';
import serverConfig from '../../../server/config';
/** @jsx h */
const components = document.querySelectorAll('.preact-list');
const fetch = createApolloFetch({
	uri: `http://37.120.161.64:1337/graphql`
});

class List extends Component {
	constructor() {
		super();
		this.state.hoveredElems = [];
		this.state.listItems = [];

		fetch({
			query: '{ skills { title icon group }}'
		}).then(res => {
			console.log(res);
			this.setState({
				listItems: res.data.skills
			});
		});
	}

	highlightElements(currentItem) {
		const items = this.base.querySelectorAll('[data-group]');

		for (let index = 0; index < items.length; index++) {
			const element = items[index];

			if (element.dataset.group === currentItem.group) {
				element.classList.add('is-active');
			} else {
				element.classList.remove('is-active');
			}
		}
	}

	render(props, state) {
		return (
			<ul>
				{state.listItems.map((item, index) => {
					return (
						<li
							key={index}
							data-group={item.group}
							onMouseEnter={this.highlightElements.bind(this, item)}
						>
							<i class={`devicons devicons-${item.icon}`} />
							{item.title}
						</li>
					);
				})}
			</ul>
		);
	}
}

// Start 'er up:
for (let index = 0; index < components.length; index += 1) {
	const element = components[index];

	render(<List />, element);
}
