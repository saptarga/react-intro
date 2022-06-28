import React from "react";

const ButtonFunction = (props) => {
	const { text = "Default", color = "Black" } = props;
	return <button style={{ color: color }}>{text}</button>;
};

export default ButtonFunction;
