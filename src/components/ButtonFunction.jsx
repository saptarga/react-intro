import React from "react";

const ButtonFunction = (props) => {
	const { text, color } = props;
	return <button style={{ color: color }}>{text}</button>;
};

export default ButtonFunction;
