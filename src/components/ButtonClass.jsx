import React, { Component } from "react";

class ButtonClass extends Component {
	// optional
	constructor(props) {
		super(props);
	}

	render() {
		const { text, color } = this.props;
		return <button>{text ? text : "Default Text"}</button>;
	}
}

export default ButtonClass;
