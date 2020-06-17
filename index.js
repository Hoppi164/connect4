const e = React.createElement;
// This File is for test hosting using github pages
// This File will not be opened when running NPM Start
class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redsTurn: true
		};
	}

	render() {
		return (
			<div>
				<h1> Insert Connect4 Table! GITHUB PAGES </h1>
				<h1> Insert Connect4 info! </h1>
			</div>
		);
	}
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Game), domContainer);

