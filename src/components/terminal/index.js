import { h, Component } from 'preact';
import style from './style';

function Command({ children }) {
  return <div className={ style.command }>{ children }</div>
}

function Comment({ children }) {
  return <div className={ style.comment }>{ children }</div>
}

class Terminal extends Component {
	render({ children }) {
		return (
			<pre className={ style.pre }>
				<code>{ children }</code>
			</pre>
		);
	}
}

Terminal.Command = Command
Terminal.Comment = Comment

export default Terminal
