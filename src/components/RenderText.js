import React from 'react';

//STANDARD PROPS
const RenderText = props => {
	return <div>{props.myText}</div>;
};

//DESTRUCTUREDED PROPS
// const RenderText = ({ myText }) => {
// 	return <div>{myText}</div>;
// };

export default RenderText;
