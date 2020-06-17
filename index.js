const e = React.createElement;

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

