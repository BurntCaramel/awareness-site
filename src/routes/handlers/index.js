import { h, Component } from 'preact';
import style from './style';
import Code from '../../components/code'

export default class Handlers extends Component {
	render() {
		return (
			<main class={style.handlers}>
				<h1>Awareness Handlers</h1>

				<p>There are several options available for handlers.</p>

				<p>They range from functions that return new state, to generator functions that yield Promises, and everything in between.</p>

				<h2>Function returning new state</h2>
				<Code children={
`
const changeCarrots = () => ({
	carrots: 25
})
`
				} />

				<h2>Function returning function that transforms old state to new state</h2>
				<Code children={
`
const addCarrots = () => ({ carrots }) => ({
	carrots: carrots + 10
})
`
				} />

				<h2>Async function returning new state</h2>
				<Code children={
`
const changeCarrotsInFuture = async () => {
	const res = await fetch('/api/carrots')
	const data = res.json()
	return { carrots: data.carrots }
}
`
				} />

				<h2>Async function returning new state</h2>
				<Code children={
`
const addCarrots = () => ({ carrots }) => ({
	carrots: carrots + 10
})
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

				<h2>Generator function yielding new state</h2>
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

				<h2>Generator function yielding function that transforms old state to new state</h2>
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

				<h2>Generator function yielding Promise resolving to new state</h2>
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
