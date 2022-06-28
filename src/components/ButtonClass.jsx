import React, { Component } from "react";

class ButtonClass extends Component {
	// optional
	constructor(props) {
		super(props);
	}

	render() {
		return <button>{this.props.text}</button>;
	}
}

export default ButtonClass;
