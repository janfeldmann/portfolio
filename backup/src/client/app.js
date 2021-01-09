import { hot } from 'react-hot-loader/root';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import LayoutStyle from './styles/layout';
import TypoStyle from './styles/typo';
import Home from './pages/Home';

const App = hot(() => (
	<div>
		<LayoutStyle />
		<TypoStyle />

		<CSSTransition
			classNames="fade"
			in={true}
			appear={true}
			timeout={150}
			onEnter={() => {
				console.log('ENTER!!');
			}}
		>
			<Home />
		</CSSTransition>
	</div>
));

export default App;
