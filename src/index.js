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
		this.state = {date: new Date(), isCheck: true};
		this.onClickButton = this.onClickButton.bind(this);
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState( {date: new Date()} );
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	onClickButton(e) {
		this.setState({isCheck: !this.state.isCheck});
	}

	render() {
		let str;
		if (this.state.isCheck) {
			str = <Shower />;
		}
		return (
			<div>
				<Bar>hello <Button onClick={this.onClickButton}>Text</Button></Bar>
				<div className="some">
					<Button onClick={this.onClickButton}>Text</Button>
					<p>{this.state.date.toLocaleTimeString()}</p>
					{str}
				</div>
			</div>
		);
		
	}
}


function Shower() {
	return (
		<div>some secret text</div>
	);
}

ReactDOM.render(<My text="hello"/>, document.getElementById('root'));

