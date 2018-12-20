import React from 'react';
import InputComponent from './InputComponent';

const data = [
	{ name: 'fred', age: 30 },
	{ name: 'Joon', age: 23 },
	{ name: 'Adrian', age: 24 }
];

const categories = ['apple', 'orange', 'bananana'];

const UnClicked = props => {
	return (
		<button
			onClick={() => {
				props.clickMe('clicked');
			}}
		>
			CLICK ME
		</button>
	);
};

class Clicked extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	handleChange = e => {
		console.log(e.target.value);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<select value={this.state.value} onChange={this.handleChange}>
					{this.props.categories.map(category => (
						<option value={category}>{category}</option>
					))}
				</select>
			</form>
		);
	}
}

class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: 'none'
		};

		this.clickMe = this.clickMe.bind(this);
	}

	clickMe = change => {
		this.setState({
			clicked: change
		});
		// console.log(this.state);
	};

	dropDown = () => {
		if (this.state.clicked === 'none') {
			return <UnClicked clickMe={this.clickMe} />;
		}
		return <Clicked categories={this.props.categories} />;
	};

	render() {
		return <div>{this.dropDown()}</div>;
	}
}

//functional component AKA stateless component
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: data,
			categories: categories
		};
	}
	render() {
		return (
			<div>
				<div>'I'M NOW RENDERED'</div>
				{this.state.data.map(person => (
					<div>
						<div>{person.name}</div>
						<div>{person.age}</div>
						<DropDown categories={this.state.categories} />
					</div>
				))}
			</div>
		);
	}
}

//class component AKA stateful component
// class App extends React.Component {
// 	render() {
// 		return <div>'I AM NOW RENDERED'</div>;
// 	}
// }

export default App;
