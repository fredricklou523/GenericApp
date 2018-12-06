import React from 'react';
import InputComponent from './InputComponent';

//functional component AKA stateless component
const App = () => {
	return (
		<div>
			<div>'I'M NOW RENDERED'</div>;
			<InputComponent />
		</div>
	);
};

//class component AKA stateful component
// class App extends React.Component {
// 	render() {
// 		return <div>'I AM NOW RENDERED'</div>;
// 	}
// }

export default App;
