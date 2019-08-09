import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import { View, Panel, PanelHeader, Group, List, Cell, Div, Button, HeaderButton, CellButton, Header } from '@vkontakte/vkui';
import Icon20GlobeOutline from '@vkontakte/icons/dist/20/globe_outline';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Bar from './Bar';

class My extends React.Component {
	constructor(props) {
		super(props);
		this.state = {dataText: []};
		this.clickCall = this.clickCall.bind(this);
		this.removeCall = this.removeCall.bind(this);
	}

	clickCall(event) {
		this.state.dataText.push(event.currentTarget.dataset.val);
		this.setState({dataText: this.state.dataText});
	}

	removeCall(event) {
		this.state.dataText.pop();
		this.setState({dataText: this.state.dataText});
	}

	showButtons() {
		return this.props.data.map((val) => {
			return (
				<Button data-val={val} level="outline" disabled={this.state.dataText.indexOf(val) >= 0} onClick={this.clickCall}>{val}</Button>
			);
		});
	}

	render() {
		return (
			<div>
				{this.showButtons()}
				<div>{this.state.dataText}</div>
				<Button onClick={this.removeCall}>Remove last</Button>
			</div>
			
		);
	}
}



var data = ["test", "next", "some", "super"];
ReactDOM.render(<My data={data}/>, document.getElementById('root'));

