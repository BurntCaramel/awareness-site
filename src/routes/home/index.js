import { h, Component } from 'preact';
import style from './style';
import Code from '../../components/code'

export default class Home extends Component {
	render() {
		return (
			<main class={style.home}>
				<h1>Awareness</h1>

				<p>Bring your components to life with loaded data, animation.</p>

				<p>Works with <strong>React</strong>, <strong>Preact</strong> & <strong>Redux</strong>.</p>

				<p>{'<'} 2 KB gzipped</p>

			</main>
		);
	}
}
