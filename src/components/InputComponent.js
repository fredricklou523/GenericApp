import React from 'react';
import RenderText from './RenderText';

// class App extends React.Component {

class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	handleInputChange = event => {
		//handling input change
		// console.log(event.target.value);
		this.setState({
			text: event.target.value
		});
		// console.log(this.state);
	};

	render() {
		return (
			<div>
				<input onChange={this.handleInputChange} />
				<div>{this.state.text}</div>
				<RenderText myText={this.state.text} />
			</div>
		);
	}
}

export default InputComponent;

//GOAL -> Have our input box display the text on our webpage as we type
// -> on clicking "BOLD" make the data display bold

//make an event handler -> on change that runs function handleInputChange
//handleInput Change ->  Take our keystrokes, and save the data in state

//TO make our text display in our DOM -> do something to read the state, and display to the DOM
