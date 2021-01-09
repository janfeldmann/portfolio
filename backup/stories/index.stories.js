import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Section } from '../src/client/components/Section';

storiesOf('Section', module)
	.add('with text', () => <Section>Section</Section>)
	.add('with some emoji', () => (
		<Section>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Section>
	));
