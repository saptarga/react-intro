import React, { Component } from "react";

class ButtonClass extends Component {
	// optional
	constructor(props) {
		super(props);
	}

	render() {
		const { text, color } = this.props;
		return <button>{text}</button>;
	}
}

ButtonClass.defaultProps = {
	text: "Default",
	color: "black",
};

export default ButtonClass;
