import { h, Component } from 'preact';
import style from './style';
import Code from '../../components/code'
import Terminal from '../../components/terminal'

export default class Home extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>Awareness</h1>

				<p>Bring your components to life with loaded data, animations, and async actions.</p>

				<p>
						{'Works with '}
						<strong><a href="https://github.com/RoyalIcing/react-organism">React</a></strong>
						{', '}
						<strong><a href="https://github.com/RoyalIcing/preact-organism">Preact</a></strong>
						{' & '}
						<strong><a href="https://github.com/RoyalIcing/redux-organism">Redux</a></strong>.
					</p>

				<p>Core is <a href="https://bundlephobia.com/result?p=awareness">less than 1 KB gzipped</a>.</p>

				<h2>Examples</h2>
				<ul>
					<li><a href="http://minesweeter.netlify.com/">💣 Minesweeper Clone</a></li>
				</ul>

				<h2>Installation</h2>
				<dl>
					<dt>React:</dt>
					<dd><Terminal>
						<Terminal.Command>yarn add react-organism</Terminal.Command>
						<Terminal.Comment># or, if you're not using yarn</Terminal.Comment>
						<Terminal.Command>npm install -S react-organism</Terminal.Command>
					</Terminal></dd>

					<dt>Preact:</dt>
					<dd><Terminal>
						<Terminal.Command>yarn add preact-organism</Terminal.Command>
						<Terminal.Comment># or, if you're not using yarn</Terminal.Comment>
						<Terminal.Command>npm install -S preact-organism</Terminal.Command>
					</Terminal></dd>

					<dt>Redux:</dt>
					<dd><Terminal>
						<Terminal.Command>yarn add redux-organism</Terminal.Command>
						<Terminal.Comment># or, if you're not using yarn</Terminal.Comment>
						<Terminal.Command>npm install -S redux-organism</Terminal.Command>
					</Terminal></dd>
				</dl>

				{ false && <div>
						<h2>Minesweeper clone</h2>
						<iframe src="https://codesandbox.io/embed/github/RoyalIcing/minesweeter/tree/master/?fontsize=13&hidenavigation=1&module=%models%2Fgame.js" style="width:100%; height:740px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
					</div>
				}

				{ false && <div>
						<h2>Counter</h2>
						<iframe src="https://codesandbox.io/embed/61l8893lyw?fontsize=13&hidenavigation=1&module=%2Fstate%2Fcounter.js" style="width:100%; height:240px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
					</div>
				}

				<h2>To Do List:</h2>
				<Code children={
`
const initial = () => ({
	items: [
		{ text: 'Make smoothie', done: false },
		{ text: 'Dance in mirror', done: true }
	]
})

const add = (props, text) => ({ items }) => ({
	items: items.concat({ text, done: false })
})

const removeAtIndex = (props, index) => ({ items }) => ({
	items: items.splice(index, 1)
})

const toggleAtIndex = (props, index) => ({ items }) => ({
	items: items.map((item, currentIndex) =>
		index === currentIndex ? { ...item, done: !item.done } : item
	)
})
`
				} />

			</main>
		);
	}
}
