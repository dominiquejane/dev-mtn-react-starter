import React from 'react';
import ReactDOM from 'react-dom';

import List from "./List.component";

var App = React.createClass({
	getInitialState() { //return state of the component
		return {
			foo: [1, 2, 3, 4],
			bar: "thing",
			foothang: [
				{name:"domdom"}, 
				{name: "nomnom"}
			],
			fooempty: "",
		}
	},
	updateFooempty(string) {
		this.setState({
			fooempty: string
		})
	},
	handleClick() {
		this.setState({ //parts of a state are only modified if you want it to be changed, ie by specifiying it, => foo affected, not bar
			foo: this.state.foo.concat([this.state.foo.length + 1])
		})
	},
	render() {
		return (
			<div>
				<div onClick={this.handleClick}>{this.state.foo}</div>
				<List updateFooemtpy={this.updateFooempty} />
				<h1>{this.state.fooempty}</h1>
				{this.state.foo.map(function(string, index) {
					return <h1 key={index}>{string}</h1>
				})}
			</div>
		)
	}
});


ReactDOM.render(<App />, document.getElementById("app"));
