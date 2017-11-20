import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>»α«</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Intro</Link>
					<Link activeClassName={style.active} href="/handlers/">Handlers</Link>
					<Link activeClassName={style.active} href="/react/">React</Link>
					<Link activeClassName={style.active} href="/preact/">Preact</Link>
					<Link activeClassName={style.active} href="/redux/">Redux</Link>
				</nav>
			</header>
		);
	}
}
