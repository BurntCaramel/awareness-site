import { h, Component } from 'preact';
// import style from './style';

function formatCode(input) {
  input = input.trim()
  input = input.replace(/\t/g, '  ')
  return input
}

export default class Code extends Component {
	render({ children }) {
		return (
			<pre>
				<code>{ formatCode(children[0] || '') }</code>
			</pre>
		);
	}
}
