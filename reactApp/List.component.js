import React from "react";

var List = React.createClass({
	handleChange(event) {
		if (event.keyCode === 13) { // 13 refers to Enter button
			this.props.updateFooemtpy(event.target.value); //target is input field, value is what's in the input field
			event.target.value = "";
		}
	},
	render() {
		return (
			<div>
				<input onKeyDown={this.handleChange}/>
			</div>
		) 
	}
});

export default List;