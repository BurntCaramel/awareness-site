import { h, Component } from 'preact';
import style from './style';
import Code from '../../components/code'

export default class Home extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>Awareness</h1>

				<p>Bring your components to life with loaded data, animation, and multi-step asynchronous actions.</p>

				<p>Works with <strong>React</strong>, <strong>Preact</strong> & <strong>Redux</strong>.</p>

				<p>Core is <a href="https://bundlephobia.com/result?p=awareness">less than 1 KB gzipped</a>.</p>

				<h2>Installation</h2>
				<ul>
					<li><strong>React:</strong> <code>yarn add react-organism</code></li>
					<li><strong>Preact:</strong> <code>yarn add preact-organism</code></li>
					<li><strong>Redux:</strong> <code>yarn add redux-organism</code></li>
				</ul>

				<div>
					<h2>Minesweeper clone</h2>
					<iframe src="https://codesandbox.io/embed/github/RoyalIcing/minesweeter/tree/master/?fontsize=13&hidenavigation=1&module=%models%2Fgame.js" style="width:100%; height:740px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
				</div>

				<div>
					<h2>Counter</h2>
					<iframe src="https://codesandbox.io/embed/61l8893lyw?fontsize=13&hidenavigation=1&module=%2Fstate%2Fcounter.js" style="width:100%; height:240px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
				</div>

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
