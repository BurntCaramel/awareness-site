import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header className={style.header}>
				<h1>{'α'}</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Getting Started</Link>
					<Link activeClassName={style.active} href="/handlers/">Handlers</Link>
				</nav>
			</header>
		);
	}
}
