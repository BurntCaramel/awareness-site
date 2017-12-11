import { h, Component } from 'preact';
import style from './style';
import Code from '../../components/code'

export default class Handlers extends Component {
	render() {
		return (
			<main class={style.handlers}>
				<h1>Writing Handlers</h1>

				<p>There are several options to choose for writing handlers. Handlers are pure functions that take the previous state and transform it in some way.</p>
				
				<p>You have the full power of ES6 available: <strong>async</strong> functions, <strong>generator</strong> functions, or just a good old-fashioned function. You can even create a generator function that <strong>yields promises</strong> (great for animation).</p>

				<ul>
					<li><a href="#function">Function returning new state</a></li>
					<li><a href="#function-transform">Function returning function that transforms old state to new state</a></li>
					<li><a href="#async-function">Async function returning new state</a></li>
					<li><a href="#generator-function">Generator function yielding new state</a></li>
					<li><a href="#generator-function-transform">Generator function yielding function that transforms old state to new state</a></li>
					<li><a href="#generator-function-promise">Generator function yielding Promise resolving to new state</a></li>
				</ul>

				<h2 id="function">Function returning new state</h2>
				<Code children={
`
const changeCarrots = () => ({
	carrots: 25
})
`
				} />

				<h2 id="function-transform">Function returning function that transforms old state to new state</h2>
				<Code children={
`
const addCarrots = () => ({ carrots }) => ({
	carrots: carrots + 10
})
`
				} />

				<h2 id="async-function">Async function returning new state</h2>
				<Code children={
`
const changeCarrotsInFuture = async () => {
	const res = await fetch('/api/carrots')
	const data = res.json()
	return { carrots: data.carrots }
}
`
				} />

				<p>Or with <code>Promise</code>:</p>
				<Code children={
`
const changeCarrotsInFuture = () => {
	return fetch('/api/carrots')
		.then(res => res.json())
		.then(data => ({ carrots: data.carrots }))
	})
}
`
} />

				<h2 id="generator-function">Generator function yielding new state</h2>
				<Code children={
`
// Will update state on each frame: 0, 1, 2, 3, 4, 5
function * animateCarrotsZeroToFive() {
	yield { carrots: 0 }
	yield { carrots: 1 }
	yield { carrots: 2 }
	yield { carrots: 3 }
	yield { carrots: 4 }
	yield { carrots: 5 }
}
`
				} />

				<h2 id="generator-function-transform">Generator function yielding function that transforms old state to new state</h2>
				<Code children={
`
// Will update state for 10 frames: carrots+1, carrots+2, … carrots+9, carrots+10
function * animateCarrotsByTen() {
	let total = 10
	while (total > 0) {
		yield ({ carrots }) => { carrots: carrots + 1 }
		total -= 1
	}
}
`
				} />

				<h2 id="generator-function-promise">Generator function yielding Promise resolving to new state</h2>
				<Code children={
`
// Will use result of fetching \`url\` and store it in state
function * loadURL(url) {
	yield { loading: true }
	yield fetch(url).then(res => res.json())
	yield { loading: false }
}
`
				} />

			</main>
		);
	}
}
