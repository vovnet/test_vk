import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import { View, Panel, PanelHeader, Root, Group, List, Cell, Div, Button, HeaderButton, CellButton, Header } from '@vkontakte/vkui';
import Icon20GlobeOutline from '@vkontakte/icons/dist/20/globe_outline';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Bar from './Bar';
import InputAnswer from './InputAnswer';
import Variants from './Variants';
import './input_answer.css';
import connect from '@vkontakte/vkui-connect';
import Donater from './Donater';
import Lesson from './Lesson';

const exercise = {
	question: "Я буду гулять завтра.",
	answer: ["I", "will", "walk", "tomorrow"]
};

class My extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isCompleteExercise: false,
			isCompleteLesson: false,
			currentLesson: 0
		};

		this.onCompleteExercise = this.onCompleteExercise.bind(this);
		this.onCompleteLesson = this.onCompleteLesson.bind(this);
		this.onNextExcercise = this.onNextExcercise.bind(this);
	}

	onCompleteExercise() {

	}

	onCompleteLesson() {

	}

	onNextExcercise() {

	}

	render() {
		return (
			<Lesson 
				exercise={exercise} 
				onComplete={this.onCompleteExercise} 
				progressValue={56} />
		);
	}
}

connect.send('VKWebAppInit', {});
connect.send("VKWebAppGetUserInfo", {});
connect.subscribe(function(e) {
	console.log('data!!!!');
	console.log(e.detail.data.photo_100);
	console.log(e.detail.type);
	console.log(e);
}); 
connect.subscribe((e) => console.log("hello! " + e));
ReactDOM.render(<My />, document.getElementById('root'));

